export default (element, containers) => {
    element.addEventListener('click', event => {
        element.classList.toggle('is-active')
        containers.forEach(container => container.classList.toggle('is-active'))
        event.preventDefault()
    })
}
