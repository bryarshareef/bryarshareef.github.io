---
layout: page
title: Team
permalink: /team/
---

<div class="page-title">
  <h1>Advanced AI Research Lab (AAR Lab)</h1>
  <p class="lab-blurb">
    AAR Lab develops trustworthy and scalable AI for healthcare and forensics, with a focus on large vision (vision–language) models,
    multimodal deep learning, multitask learning, graph neural networks, and agentic AI. We work with medical imaging (ultrasound,
    mammography, CBCT), EHR time-series, and interactive AR/VR/MR tools to support decision-making and structured reporting.
  </p>
</div>

<div class="page-title">
  <h1>Meet the Team</h1>
</div>


<!-- ===================== -->
<!-- Graduate Students -->
<!-- ===================== -->
{% assign grads = site.data.students | where: "group", "Graduate" %}
{% if grads and grads.size > 0 %}
  <div class="page-title">
    <h2>Graduate Students</h2>
  </div>

  <div class="students-container">
    {% for student in grads %}
      <div class="student-profile">
        <img src="{{ student.photo }}" alt="{{ student.name }}" class="student-photo">
        <h3>{{ student.name }}</h3>
        <h4 class="student-role">{{ student.role }}</h4>
        <p>{{ student.research_area }}</p>

        <div class="student-socials">
          {% if student.socials %}
            {% for social in student.socials %}
              {% if social.link and social.link != "" and social.link != "#" %}
                <a href="{{ social.link }}" target="_blank" rel="noopener">
                  <i class="{{ social.icon }}"></i>
                </a>
              {% endif %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

<!-- ===================== -->
<!-- Undergraduate Researchers -->
<!-- ===================== -->
{% assign ugs = site.data.students | where: "group", "Undergraduate" %}
{% if ugs and ugs.size > 0 %}
  <div class="page-title">
    <h2>Undergraduate Researchers</h2>
  </div>

  <div class="students-container">
    {% for student in ugs %}
      <div class="student-profile">
        <img src="{{ student.photo }}" alt="{{ student.name }}" class="student-photo">
        <h3>{{ student.name }}</h3>
        <h4 class="student-role">{{ student.role }}</h4>
        <p>{{ student.research_area }}</p>

        <div class="student-socials">
          {% if student.socials %}
            {% for social in student.socials %}
              {% if social.link and social.link != "" and social.link != "#" %}
                <a href="{{ social.link }}" target="_blank" rel="noopener">
                  <i class="{{ social.icon }}"></i>
                </a>
              {% endif %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

<!-- ===================== -->
<!-- Former Students -->
<!-- ===================== -->
{% assign former = site.data.students | where: "group", "Former" %}
{% if former and former.size > 0 %}
  <div class="page-title">
    <h2>Former Students</h2>
  </div>

  <div class="students-container">
    {% for student in former %}
      <div class="student-profile">
        <img src="{{ student.photo }}" alt="{{ student.name }}" class="student-photo">
        <h3>{{ student.name }}</h3>
        <h4 class="student-role">{{ student.role }}</h4>
        <p>{{ student.research_area }}</p>

        <div class="student-socials">
          {% if student.socials %}
            {% for social in student.socials %}
              {% if social.link and social.link != "" and social.link != "#" %}
                <a href="{{ social.link }}" target="_blank" rel="noopener">
                  <i class="{{ social.icon }}"></i>
                </a>
              {% endif %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

<!-- ===================== -->
<!-- Former Interns -->
<!-- ===================== -->
{% assign interns = site.data.students | where: "group", "Former Internship" %}
{% if interns and interns.size > 0 %}
  <div class="page-title">
    <h2>Former Interns</h2>
  </div>

  <div class="students-container">
    {% for student in interns %}
      <div class="student-profile">
        <img src="{{ student.photo }}" alt="{{ student.name }}" class="student-photo">
        <h3>{{ student.name }}</h3>
        <h4 class="student-role">{{ student.role }}</h4>
        <p>{{ student.research_area }}</p>

        <div class="student-socials">
          {% if student.socials %}
            {% for social in student.socials %}
              {% if social.link and social.link != "" and social.link != "#" %}
                <a href="{{ social.link }}" target="_blank" rel="noopener">
                  <i class="{{ social.icon }}"></i>
                </a>
              {% endif %}
            {% endfor %}
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endif %}

<!-- ===================== -->
<!-- Prospective Students -->
<!-- ===================== -->

