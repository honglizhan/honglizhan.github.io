---
layout: page
permalink: /publications/
title: Publications
description:
years: [2026, 2025, 2024, 2023, 2022]
nav: true
nav_order: 3
---
*\* Denotes equal contributions.*

Also, here is my [Google Scholar page](https://scholar.google.com/citations?hl=en&user=_EAk1jUAAAAJ).

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

