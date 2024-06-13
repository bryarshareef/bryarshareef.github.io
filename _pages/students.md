---
layout: page
title: Students
permalink: /students/
---

<div class="page-title">
  <h1>Meet The Team</h1>
</div>

<div class="students-container">
  {% for student in site.data.students %}
  <div class="student-profile">
    <img src="{{ student.photo }}" alt="{{ student.name }}" class="student-photo">
    <h3>{{ student.name }}</h3>
    <h4 class="student-role">{{ student.role }}</h4>
    <p>{{ student.research_area }}</p>
    <div class="student-socials">
      {% if student.socials %}
        {% for social in student.socials %}
          <a href="{{ social.link }}" target="_blank">
            <i class="{{ social.icon }}"></i>
          </a>
        {% endfor %}
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
