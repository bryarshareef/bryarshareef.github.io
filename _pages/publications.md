---
title: ""
permalink: /publications/
description: "Publications by Bryar Shareef in multimodal AI, medical imaging, clinical decision support, and scientific machine learning."
classes:
  - wide-page
---

{% include base_path %}

<header class="page-intro">
  <span class="eyebrow">Publications</span>
  <h1>Research contributions</h1>
  <p>Peer-reviewed articles, conference papers, protocols, abstracts, and selected preprints across medical imaging, multimodal learning, clinical AI, and scientific computing.</p>
</header>

<div class="publication-toolbar">
  <p>Entries are organized by year. Publication status and external links are shown when available.</p>
  <a class="button-secondary" href="{{ site.author.googlescholar }}" rel="external">View Google Scholar</a>
</div>

{% assign publications = site.publications | sort: "date" | reverse %}
{% assign current_year = "" %}
{% for post in publications %}
{% assign publication_year = post.date | date: "%Y" %}
{% if publication_year != current_year %}
<h2 class="pub-year">{{ publication_year }}</h2>
{% assign current_year = publication_year %}
{% endif %}
{% assign highlighted_citation = post.citation
  | replace: 'Bryar Shareef', '<strong>Bryar Shareef</strong>'
  | replace: 'Shareef, Bryar Mustafa', '<strong>Shareef, Bryar Mustafa</strong>'
  | replace: 'B. M. Shareef', '<strong>B. M. Shareef</strong>'
  | replace: 'B. Shareef', '<strong>B. Shareef</strong>'
  | replace: 'Shareef, B.', '<strong>Shareef, B.</strong>' %}
<article class="pub-card">
  <div class="pub-card__year">{{ publication_year }}</div>
  <div>
    <div class="pub-card__venue">{{ post.venue }}</div>
    <h3>{{ post.title }}</h3>
    {% if post.citation %}<p class="pub-card__citation">{{ highlighted_citation }}</p>{% endif %}
    <div class="pub-card__links" aria-label="Links for {{ post.title }}">
      {% if post.link %}<a href="{{ post.link }}" rel="external">Publisher</a>{% endif %}
      {% if post.paperurl %}<a href="{{ post.paperurl }}">Paper</a>{% endif %}
      {% if post.code %}<a href="{{ post.code }}" rel="external">DOI / record</a>{% endif %}
      {% if post.github %}<a href="{{ post.github }}" rel="external">Code</a>{% endif %}
      <a href="{{ base_path }}{{ post.url }}">Details</a>
    </div>
  </div>
</article>
{% endfor %}
