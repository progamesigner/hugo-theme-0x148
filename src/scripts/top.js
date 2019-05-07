import { scrollY, spy } from './scroll'

export default element => {
    spy((_, y) => {
        if (y > window.innerHeight / 4) {
            element.classList.add('is-active')
        } else {
            element.classList.remove('is-active')
        }
    })

    element.addEventListener('click', event => scrollY(0, event))
}
