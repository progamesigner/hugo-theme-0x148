import { bind } from './scrollspy'

export default (element, threshold = 0) => {
    bind((x, y) => {
        if (y > threshold) {
            element.classList.add('is-collapsed')
        } else {
            element.classList.remove('is-collapsed')
        }
    })
}
