---
layout: page
title: Team
permalink: /team/
---
<div class="page-title">
  <h1>Laboratory of Advanced AI Research (LAAR)</h1>
  <p style="text-align:justify"></p>
</div>
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
  <div>
  <h2>🚀🧑‍💻️⚡JOIN MY TEAM❗❗❗</h2>
  <p style="text-align:justify"> I am looking for motivated MS and PhD students with strong math and programming skills, particularly in large language models and AI-driven healthcare applications. If you are passionate about advancing medical imaging and diagnostics, please email me your CV and indicate your goals at <b>bryar.shareef[at]unlv.edu</b></p>
  </div>
</div>

