import { getElementTop } from './scripts/scroll'

import burger from './scripts/burger'
import collapse from './scripts/collapse'
import consent from './scripts/consent'
import emoji from './scripts/emoji'
import highlight from './scripts/highlight'
import menu from './scripts/menu'
import open from './scripts/open'
import progress from './scripts/progress'
import top from './scripts/top'

const anchorForId = id => {
    let anchor = document.createElement('a')
    anchor.href = `#${id}`
    anchor.classList.add('page-heading-link')
    return anchor
}

const bootstrap = () => {
    document.querySelectorAll('.page-content').forEach(container => {
        const headings = container.querySelectorAll('h1[id], h2[id], h3[id], h4[id], #comments')

        headings.forEach(heading => {
            heading.appendChild(anchorForId(heading.id))
            heading.classList.add('page-heading')
        })

        document.querySelectorAll('.page-menu').forEach(item => menu(item, headings, 60))
    })

    document.querySelectorAll('.navbar-burger').forEach(item => burger(item, document.querySelectorAll('.navbar-menu')))
    document.querySelectorAll('.navbar.is-fixed-top').forEach(item => collapse(item, 60))
    document.querySelectorAll('.page-menu.is-fixed-left').forEach(item => collapse(item, getElementTop(document.querySelectorAll('.page-body')) - 60))
    document.querySelectorAll('.page-menu.is-sticky-right').forEach(item => collapse(item, getElementTop(document.querySelectorAll('.page-body')) - 60))
    document.querySelectorAll('.page-share.is-sticky-left').forEach(item => collapse(item, getElementTop(document.querySelectorAll('.page-body')) - 60))
    document.querySelectorAll('body').forEach(consent)
    document.querySelectorAll('body').forEach(emoji)
    document.querySelectorAll('.chroma > table').forEach(highlight)
    document.querySelectorAll(`a[rel~="external"], a[href^="http"]:not([href^="${location.protocol}//${location.host}"])`).forEach(open)
    document.querySelectorAll('.progress').forEach(item => progress(item, 0))
    document.querySelectorAll('.back-to-top').forEach(top)
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap)
} else {
    setTimeout(bootstrap, 1)
}
