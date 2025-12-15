/* global tf, cocoSsd, mobilenet, deeplab */

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function byId(id) {
  return document.getElementById(id);
}

function loadImageFromFile(file, imgEl) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    imgEl.onload = () => {
      URL.revokeObjectURL(url);
      resolve();
    };
    imgEl.onerror = reject;
    imgEl.src = url;
    imgEl.style.display = "block";
  });
}

function fitCanvasToImage(canvas, img) {
  // Ensure canvas overlays the image 1:1
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  canvas.style.width = img.clientWidth + "px";
  canvas.style.height = img.clientHeight + "px";
}

function drawDetections(canvas, img, preds) {
  fitCanvasToImage(canvas, img);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.lineWidth = 3;
  ctx.font = "16px Arial";

  preds.forEach(p => {
    const [x, y, w, h] = p.bbox;
    ctx.strokeRect(x, y, w, h);

    const label = `${p.class} (${Math.round(p.score * 100)}%)`;
    const textW = ctx.measureText(label).width;
    const textH = 18;

    ctx.fillRect(x, Math.max(0, y - textH), textW + 8, textH);
    ctx.clearRect(x + 2, Math.max(0, y - textH) + 2, textW + 4, textH - 4); // simple contrast trick
    ctx.fillText(label, x + 4, Math.max(14, y - 4));
  });
}

function renderList(el, items) {
  if (!el) return;
  if (!items.length) {
    el.innerHTML = "<em>No results.</em>";
    return;
  }
  el.innerHTML = "<ul>" + items.map(x => `<li>${x}</li>`).join("") + "</ul>";
}

async function main() {
  // ---------- Load models ----------
  setText("detectorStatus", "Model: loading...");
  setText("clsStatus", "Model: loading...");
  setText("segStatus", "Model: loading...");

  let detector = null;
  let classifier = null;
  let segmenter = null;

  try {
    detector = await cocoSsd.load();
    setText("detectorStatus", "Model: loaded (COCO-SSD)");
  } catch (e) {
    setText("detectorStatus", "Model: failed to load");
    console.error(e);
  }

  try {
    classifier = await mobilenet.load();
    setText("clsStatus", "Model: loaded (MobileNet)");
  } catch (e) {
    setText("clsStatus", "Model: failed to load");
    console.error(e);
  }

  try {
    // "pascal" is a common preset for this demo model
    segmenter = await deeplab.load({ base: "pascal", quantizationBytes: 2 });
    setText("segStatus", "Model: loaded (DeepLab)");
  } catch (e) {
    setText("segStatus", "Model: failed to load");
    console.error(e);
  }

  // ---------- Object detection ----------
  const detFile = byId("detectorFile");
  const detImg = byId("detectorImg");
  const detCanvas = byId("detectorCanvas");
  const detOut = byId("detectorOut");

  if (detFile) {
    detFile.addEventListener("change", async (ev) => {
      const file = ev.target.files?.[0];
      if (!file || !detector) return;

      setText("detectorStatus", "Running detection...");
      await loadImageFromFile(file, detImg);

      const preds = await detector.detect(detImg);
      drawDetections(detCanvas, detImg, preds);

      renderList(detOut, preds.map(p => `${p.class} — ${(p.score * 100).toFixed(1)}%`));
      setText("detectorStatus", `Done. ${preds.length} objects.`);
    });
  }

  // ---------- Classification ----------
  const clsFile = byId("clsFile");
  const clsImg = byId("clsImg");
  const clsOut = byId("clsOut");

  if (clsFile) {
    clsFile.addEventListener("change", async (ev) => {
      const file = ev.target.files?.[0];
      if (!file || !classifier) return;

      setText("clsStatus", "Running classification...");
      await loadImageFromFile(file, clsImg);

      const preds = await classifier.classify(clsImg);
      renderList(clsOut, preds.map(p => `${p.className} — ${(p.probability * 100).toFixed(1)}%`));
      setText("clsStatus", "Done.");
    });
  }

  // ---------- Segmentation ----------
  const segFile = byId("segFile");
  const segImg = byId("segImg");
  const segCanvas = byId("segCanvas");
  const segOut = byId("segOut");

  function overlayMask(canvas, img, segmentationMap) {
    fitCanvasToImage(canvas, img);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // segmentationMap is a 2D array-like; we create a simple translucent mask
    const w = canvas.width, h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;

    // Create a simple binary mask (non-background)
    // Background class in pascal is often 0.
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x);
        const cls = segmentationMap[idx];
        const off = idx * 4;
        if (cls !== 0) {
          data[off + 0] = 0;
          data[off + 1] = 0;
          data[off + 2] = 0;
          data[off + 3] = 90; // alpha
        } else {
          data[off + 3] = 0;
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  if (segFile) {
    segFile.addEventListener("change", async (ev) => {
      const file = ev.target.files?.[0];
      if (!file || !segmenter) return;

      setText("segStatus", "Running segmentation...");
      await loadImageFromFile(file, segImg);

      const result = await segmenter.segment(segImg);
      // result.segmentationMap is a flat array (w*h)
      overlayMask(segCanvas, segImg, result.segmentationMap);

      setText("segOut", "Mask overlay shown (demo segmentation).");
      setText("segStatus", "Done.");
    });
  }
}

document.addEventListener("DOMContentLoaded", main);
