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

<!-- Publication Search Bar -->
<div class="publication-search" style="margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
  <div class="row">
    <div class="col-md-10">
      <label for="keyword-filter" style="font-weight: bold; margin-bottom: 5px; display: block;">Search Publications:</label>
      <input type="text" id="keyword-filter" class="form-control" placeholder="Search by title, author, or abstract...">
    </div>
    <div class="col-md-2" style="display: flex; align-items: end;">
      <button id="clear-search" class="btn btn-secondary btn-sm" style="margin-bottom: 0;">Clear</button>
    </div>
  </div>
</div>

<div class="publications">

{% for y in page.years %}
  <h2 class="year" data-year="{{y}}">{{y}}</h2>
  <div class="year-publications" data-year="{{y}}">
    {% bibliography -f papers -q @*[year={{y}}]* %}
  </div>
{% endfor %}

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const keywordFilter = document.getElementById('keyword-filter');
  const clearButton = document.getElementById('clear-search');

  function filterPublications() {
    const keyword = keywordFilter.value.toLowerCase().trim();

    // Get all publication entries - try multiple selectors to catch the actual structure
    const yearSections = document.querySelectorAll('.year-publications');
    const yearHeaders = document.querySelectorAll('h2.year');

    yearSections.forEach((section, index) => {
      // Try different selectors to find the actual publication entries
      let entries = section.querySelectorAll('.row');
      if (entries.length === 0) {
        entries = section.querySelectorAll('li');
      }
      if (entries.length === 0) {
        entries = section.querySelectorAll('div[id]');
      }

      let visibleCount = 0;

      entries.forEach(entry => {
        let shouldShow = true;

        // Keyword filter
        if (keyword) {
          // Get all text content from the entry
          const entryText = entry.textContent.toLowerCase();

          // Also try specific selectors
          const title = entry.querySelector('.title') ? entry.querySelector('.title').textContent.toLowerCase() : '';
          const author = entry.querySelector('.author') ? entry.querySelector('.author').textContent.toLowerCase() : '';
          const abstract = entry.querySelector('.abstract p') ? entry.querySelector('.abstract p').textContent.toLowerCase() : '';
          const venue = entry.querySelector('.badge') ? entry.querySelector('.badge').textContent.toLowerCase() : '';

          // Search in any of these fields
          if (!entryText.includes(keyword) &&
              !title.includes(keyword) &&
              !author.includes(keyword) &&
              !abstract.includes(keyword) &&
              !venue.includes(keyword)) {
            shouldShow = false;
          }
        }

        entry.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) visibleCount++;
      });

      // Show/hide year headers based on whether they have visible publications
      const yearHeader = yearHeaders[index];
      if (yearHeader) {
        yearHeader.style.display = visibleCount > 0 ? 'block' : 'none';
      }
      section.style.display = visibleCount > 0 ? 'block' : 'none';
    });

    // Debug output
    console.log('Search term:', keyword);
    console.log('Found year sections:', yearSections.length);
  }

  function clearSearch() {
    keywordFilter.value = '';
    filterPublications();
  }

  // Add event listeners
  keywordFilter.addEventListener('input', filterPublications);
  keywordFilter.addEventListener('keyup', filterPublications);
  clearButton.addEventListener('click', clearSearch);

  // Debug: Add a delay to ensure DOM is fully loaded
  setTimeout(() => {
    console.log('DOM loaded, searching for publications...');
    const testSections = document.querySelectorAll('.year-publications');
    console.log('Year sections found:', testSections.length);
    testSections.forEach((section, i) => {
      const entries = section.querySelectorAll('.row, li, div[id]');
      console.log(`Section ${i} entries:`, entries.length);
    });
  }, 1000);
});
</script>

<style>
.publication-search {
  background: var(--global-bg-color);
  border: 1px solid var(--global-text-color-light);
}

.publication-search label {
  color: var(--global-text-color);
}

.publication-search .form-control {
  background-color: var(--global-bg-color);
  border: 1px solid var(--global-text-color-light);
  color: var(--global-text-color);
}

.publication-search .form-control:focus {
  background-color: var(--global-bg-color);
  border-color: var(--global-theme-color);
  color: var(--global-text-color);
  box-shadow: 0 0 0 0.2rem rgba(var(--global-theme-color-rgb), 0.25);
}

.publication-search .btn-secondary {
  background-color: var(--global-theme-color);
  border-color: var(--global-theme-color);
  color: white;
}

.publication-search .btn-secondary:hover {
  background-color: var(--global-hover-color);
  border-color: var(--global-hover-color);
}

.year-publications {
  margin-bottom: 2rem;
}
</style>

<hr>

Additionally, you can find here my [first-year paper](/assets/ut_austin_phd_papers/Zhan%202022%20FYP%20Emotion%20Trigger%20Summarization.pdf), [second-year paper](/assets/ut_austin_phd_papers/Zhan%202023%20SYP%20Emotion%20Appraisal.pdf), the [qualifying paper](/assets/ut_austin_phd_papers/Zhan%202024%20QP%20Cognitive%20Reappraisal.pdf), as well as my [prospectus](/assets/ut_austin_phd_papers/Zhan%202025%20Prospectus.pdf) for my PhD at UT Austin.