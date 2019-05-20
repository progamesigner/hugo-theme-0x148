## [Unreleased]

...

## [1.1.1] - 2019-05-17
 - Fix section rendering

## [1.1] - 2019-05-17

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

## [1.0] - 2019-05-10

 - Initial stable release

[Unreleased]: https://github.com/progamesigner/hugo-theme-0x148/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.1.1
[1.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.1
[1.0.1]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.0.1
[1.0]: https://github.com/progamesigner/hugo-theme-0x148/releases/tag/v1.0
