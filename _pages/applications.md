---
layout: page
title: Applications
permalink: /applications/
---

<div class="page-title">
  <h1>Applications</h1>
  <p class="app-blurb">
    Interactive browser-based demos (runs locally in your browser; no images are uploaded to a server).
  </p>
</div>

<div class="app-grid">

  <div class="app-card">
    <h2>Object Detection</h2>
    <p class="app-desc">Upload an image to detect common objects (demo model: COCO-SSD).</p>

    <input type="file" id="detectorFile" accept="image/*" />
    <div class="app-status" id="detectorStatus">Model: not loaded</div>

    <div class="app-view">
      <img id="detectorImg" alt="" />
      <canvas id="detectorCanvas"></canvas>
    </div>

    <div class="app-output" id="detectorOut"></div>
  </div>

  <div class="app-card">
    <h2>Image Classification</h2>
    <p class="app-desc">Upload an image to get top predicted labels (demo model: MobileNet).</p>

    <input type="file" id="clsFile" accept="image/*" />
    <div class="app-status" id="clsStatus">Model: not loaded</div>

    <div class="app-view">
      <img id="clsImg" alt="" />
    </div>

    <div class="app-output" id="clsOut"></div>
  </div>

  <div class="app-card">
    <h2>Segmentation</h2>
    <p class="app-desc">Upload an image to segment regions (demo model: DeepLab).</p>

    <input type="file" id="segFile" accept="image/*" />
    <div class="app-status" id="segStatus">Model: not loaded</div>

    <div class="app-view">
      <img id="segImg" alt="" />
      <canvas id="segCanvas"></canvas>
    </div>

    <div class="app-output" id="segOut"></div>
  </div>

</div>

<!-- TFJS + Models -->
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.1.1/dist/mobilenet.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/deeplab@0.2.2/dist/deeplab.min.js"></script>

<script src="/assets/js/applications.js" defer></script>
