---
layout: page
permalink: /publications/
title: Publications
description:
years: [2025, 2024, 2023, 2022]
nav: true
---
\* Denotes equal contributions.

For a complete list of my publications, please visit my [Google Scholar page](https://scholar.google.com/citations?hl=en&user=_EAk1jUAAAAJ).

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<hr>

Additionally, you can find here my [first-year paper](/assets/ut_austin_phd_papers/Zhan%202022%20FYP%20Emotion%20Trigger%20Summarization.pdf), [second-year paper](/assets/ut_austin_phd_papers/Zhan%202023%20SYP%20Emotion%20Appraisal.pdf), the [qualifying paper](/assets/ut_austin_phd_papers/Zhan%202024%20QP%20Cognitive%20Reappraisal.pdf), as well as my [prospectus](/assets/ut_austin_phd_papers/Zhan%202025%20Prospectus.pdf) for my PhD at UT Austin.