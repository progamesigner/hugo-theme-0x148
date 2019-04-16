export default element => {
    element.addEventListener('click', event => {
        element.classList.toggle('is-active')
        element.parentNode.parentNode.querySelector('.navbar-menu').classList.toggle('is-active')

        event.preventDefault()
    })
}
