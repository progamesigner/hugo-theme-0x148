import burger from './scripts/burger'
import collapse from './scripts/collapse'
import highlight from './scripts/highlight'
import open from './scripts/open'
import progress from './scripts/progress'
import top from './scripts/top'

const bootstrap = () => {
    document.querySelectorAll('.chroma > table').forEach(highlight)
    document.querySelectorAll('.navbar.is-fixed-top').forEach(item => collapse(item, 60))
    document.querySelectorAll('.post-share-container').forEach(item => collapse(item, 240))
    document.querySelectorAll('.navbar-burger').forEach(burger)
    document.querySelectorAll('.progress').forEach(item => progress(item, 52))
    document.querySelectorAll('.back-to-top').forEach(top)
    document.querySelectorAll(`a[rel~="external"], a[href^="http"]`).forEach(open)
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap)
} else {
    setTimeout(bootstrap, 1)
}
