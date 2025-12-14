---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}


<hr style="margin:18px 0;" />

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
