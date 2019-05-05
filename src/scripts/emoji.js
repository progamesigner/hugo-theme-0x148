const emojis = [
    '\\(o_o)/', '(o^^)o', '(˚Δ˚)b', '(^-^*)',
    '(≥o≤)', '(^_^)b', '(·_·)', '(=\'X\'=)',
    '(>_<)', '(;-;)', '\\(^Д^)/'
]

export default container => {
    container.querySelectorAll('[data-emoji]').forEach(element => {
        var emoji = emojis[Math.floor(Math.random() * emojis.length)]
        element.appendChild(document.createTextNode(emoji))
    })
}
