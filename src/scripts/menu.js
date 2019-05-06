import { bind } from './scrollspy'

const isInView = (element, scrollTop) => {
    const scrollBottom = window.innerHeight + scrollTop
    const top = element.getBoundingClientRect().top + scrollTop
    const bottom = top + element.offsetHeight
    return (top < scrollBottom) && (bottom > scrollTop)
}

export default (menu, headings) => {
    bind((_, y) => {
        let marked = false

        headings.forEach(heading => {
            const item = menu.querySelector(`a[href="#${heading.id}"]`)
            if (!marked && isInView(heading, y)) {
                item.parentNode.classList.add('is-active')
                marked = true
            } else {
                item.parentNode.classList.remove('is-active')
            }
        })
    })
}
