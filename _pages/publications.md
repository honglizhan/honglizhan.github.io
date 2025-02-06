---
layout: page
permalink: /publications/
title: Publications
description:
years:
nav: true
---
\* Denotes equal contributions.

<div class="publications">

{% assign all_years = site.data.bibliography | map: "year" | uniq | sort | reverse %}

{% for y in all_years %}
  <h2 class="year">{{ y }}</h2>
  {% bibliography -f papers -q @*[year={{ y }}]* %}
{% endfor %}

</div>