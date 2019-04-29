export default (element) => {
    element.addEventListener('click', event => {
        element.classList.add('is-active')

        event.preventDefault()
    })
}
