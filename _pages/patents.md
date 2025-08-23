---
layout: page
permalink: /patents/
title: Patents
description:
years: [2025]
nav: true
nav_order: 4
---
*\* Denotes equal contributions.*

<div class="patents">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f patents -q @*[year={{y}}]* %}
{% endfor %}

</div>

<hr>