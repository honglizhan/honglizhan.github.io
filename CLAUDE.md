# Instructions for Claude

## Git workflow

- Commit changes and push them **directly to `master`** (the default branch). Do not open pull requests.
- If the session assigned a `claude/...` development branch, still push the finished commits to `master`
  (for example, `git push origin HEAD:master`), after first syncing with `origin/master`.

## Site notes

- This is a Jekyll site (al-folio-based) served by GitHub Pages.
- The CV is `assets/pdf/CV.pdf`; `/cv` (`_pages/CV.md`) redirects to it. To update the CV, replace that file.
