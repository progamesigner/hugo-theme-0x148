export default form => {
    const terms = document.querySelectorAll('[data-term]')

    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('keyup', _ => {
            const filter = input.value.toLowerCase()

            if (filter === '') {
                terms.forEach(term => {
                    term.classList.remove('is-hidden')
                })
            } else {
                terms.forEach(term => {
                    term.classList.add('is-hidden')
                })

                document.querySelectorAll(`[data-term*="${filter}"]`).forEach(term => {
                    term.classList.remove('is-hidden')
                })
            }
        })
    })

    form.addEventListener('submit', event => {
        event.preventDefault()
    })
}
