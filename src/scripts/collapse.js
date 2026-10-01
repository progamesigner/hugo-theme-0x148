import { spy } from './scroll'

export default (element, threshold = 0) => {
    spy((_, y) => {
        if (y > threshold) {
            element.classList.add('is-collapsed')
        } else {
            element.classList.remove('is-collapsed')
        }
    })
}
