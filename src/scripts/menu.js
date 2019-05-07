import { getElementTop, scrollY, spy } from './scroll'

const isInView = (element, scrollTop, offset = 0) => {
    const scrollBottom = window.innerHeight + scrollTop
    const top = element.getBoundingClientRect().top + scrollTop - offset
    const bottom = top + element.offsetHeight
    return (top < scrollBottom) && (bottom > scrollTop)
}

export default (menu, headings, offset = 0) => {
    headings.forEach(heading => {
        menu.querySelectorAll(`a[href="#${heading.id}"]`).forEach(element => {
            element.addEventListener('click', event => {
                scrollY(getElementTop(new Array(heading)) - offset, event)

                if (window.history.pushState) {
                    window.history.pushState(null, document.title, `#${heading.id}`)
                }
            })
        })
    })

    spy((_, y) => {
        let marked = false

        headings.forEach(heading => {
            const item = menu.querySelector(`a[href="#${heading.id}"]`)
            if (!marked && isInView(heading, y, offset)) {
                item.parentNode.classList.add('is-active')
                marked = true
            } else {
                item.parentNode.classList.remove('is-active')
            }
        })
    })
}
