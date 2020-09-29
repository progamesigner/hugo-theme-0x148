## [Unreleased]

...

## [1.3.4] - 2020-09-29
### Fixed
- Update packages to improve security

## [1.3.3] - 2020-03-04
### Fixed
- Fix an error in "get-page-breadcrumb.slice"

## [1.3.2] - 2020-02-21
### Changed
- Fix iconify URL to specific version to avoid breaking during builds
- Reformat changelog
- Update Node dependencies

### Fixed
- Fix breadcrumb generation in newer Hugo

## [1.3.1] - 2020-01-02
### Fixed
- Fix homepage posts in AMP version

## [1.3.0] - 2019-12-31
### Fixed
- Fix bugs in newer Hugo (current v0.62.0)
- Fix iconify URL

## [1.2.0] - 2019-05-21
### Added
- Add filter to term pages including archive pages

### Changed
- Allow hero captions to have HTML
- Minor design changes to series list

### Fixed
- Fix series post sorting
- Fix alignment of pagination
- Fix position number of series posts
- Fallback image in schema to logo in publisher

## [1.1.1] - 2019-05-17
### Fixed
- Fix section rendering

## [1.1.0] - 2019-05-17
### Added
- Add archetypes (default and posts)
- Add footer fallback to `.Site.Copyright` if no `.Site.Author`
- Add tooltips to footnotes
- Add scroll to footnote returns

### Changed
- Update NPM packages
- Move rss.xml layout to "_default" to allow generation on all kinds of pages
- Adjust term list styles, use dise unordered list style instead of svg icon
- Adjust styles for section, link, external link, and quote svg icons
- Remove maximun width for tooltips

### Fixed
- Fix invalid RSS XML file generation
- Fix list styles for task list
- Fix margins among blocks if some blocks are empty

## [1.0.1] - 2019-05-11
### Added
- Add "#" hash in front of page tags
- Add `exampleSite` and `docs` site

### Changed
- Allow `lang` in any elements to enable CJK font supports

### Fixed
- Normalize URLs to hugo-theme-0x148
- Fix hover styles from dropdown item in navbar
- Fix taxonomy pages are filtered wrongly
- Fix typogyaphy applies to unnecessary elements
- Fix single layout for posts not respect "share" option
- Fix meta items in single layout for posts in AMP are not aligned

## [1.0.0] - 2019-05-10
- Initial stable release

[Unreleased]: https://github.com/progamesigner/hugo-theme-0x148/compare/v1.3.4...HEAD
[1.3.4]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.3.4
[1.3.3]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.3.3
[1.3.2]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.3.2
[1.3.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.3.1
[1.3.0]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.3.0
[1.2.0]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.2.0
[1.1.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.1.1
[1.1.0]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.1.0
[1.0.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.0.1
[1.0.0]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.0.0
