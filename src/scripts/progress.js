import { spy } from './scroll'

export default (element, margin = 0) => {
    spy((_, y) => {
        const documentHeight = document.body.scrollHeight || document.documentElement.scrollHeight || document.body.offsetHeight || document.documentElement.offsetHeight || document.body.clientHeight || document.documentElement.clientHeight || 0
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0

        element.setAttribute('min', 0)
        element.setAttribute('max', documentHeight - windowHeight - margin)
        element.setAttribute('value', y)
    })
}
