import { debounce, throttle } from 'lodash/fp'

let scrollEventHandlers = []
let scrollEventInstalled = false

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2

    if (t < 1) {
        return c / 2 * t * t + b
    }

    t--

    return -c / 2 * (t * (t - 2) - 1) + b
}

export const currentScrollX = () => {
    return window.scrollX || window.pageXOffset || 0
}

export const currentScrollY = () => {
    return window.scrollY || window.pageYOffset || 0
}

export const getElementTop = elements => Math.min(...Array.prototype.slice.call(elements).map(element => element.getBoundingClientRect()).map(rect => rect.top + currentScrollY()))

export const scroll = (x, y, event) => {
    const duration = 500
    const start = performance.now()

    const cx = currentScrollX()
    const cy = currentScrollY()

    window.requestAnimationFrame(function loop(time) {
        const elapsed = time - start

        window.scroll(
            easeInOutQuad(elapsed, cx, x - cx, duration),
            easeInOutQuad(elapsed, cy, y - cy, duration)
        )

        if (elapsed < duration) {
            window.requestAnimationFrame(loop)
        } else {
            window.requestAnimationFrame(() => window.scroll(x, y))
        }
    })

    event.preventDefault()
}

export const scrollX = (x, event) => scroll(x, currentScrollY(), event)

export const scrollY = (y, event) => scroll(currentScrollX(), y, event)

export const spy = handler => {
    scrollEventHandlers.push(handler)

    if (!scrollEventInstalled) {
        const onScrollEvent = () => {
            const x = currentScrollX()
            const y = currentScrollY()
            scrollEventHandlers.forEach(handler => handler(x, y))
        }

        window.addEventListener('scroll', throttle(10)(onScrollEvent))
        window.addEventListener('resize', debounce(50)(onScrollEvent))
        window.addEventListener('orientationchange', debounce(50)(onScrollEvent))

        scrollEventInstalled = true
    }

    handler(currentScrollX(), currentScrollY())
}
