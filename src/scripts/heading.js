const anchorForId = id => {
    let anchor = document.createElement('a')
    anchor.href = `#${id}`
    anchor.classList.add('page-heading-link')
    return anchor
}

export default heading => {
    if (typeof heading.id !== 'undefined' && heading.id !== '') {
        heading.appendChild(anchorForId(heading.id))
    }
    heading.classList.add('page-heading')
}
