import { merge, property } from 'lodash/fp'

const ampConsentKey = `amp-store:${window.origin}`

const getConsentValue = !!window.ampConsentReconcile ? id => {
    const item = window.localStorage.getItem(ampConsentKey)

    if (!!item) {
        return property(`vv.amp-consent:${id}.v`)(JSON.parse(atob(item)))
    }

    return false
} : id => {
    var item = window.localStorage.getItem(`consent:${id}`)

    if (!!item) {
        return JSON.parse(atob(item))['value']
    }

    return false
}

const storeConsentValue = !!window.ampConsentReconcile ? (id, value) => {
    const item = window.localStorage.getItem(ampConsentKey)

    window.localStorage.setItem(ampConsentKey, btoa(JSON.stringify(merge({
        vv: {
            [`amp-consent:${id}`]: {
                v: value,
                t: +new Date()
            }
        }
    })(item || {}))))
} : (id, value) => {
    window.localStorage.setItem(`consent:${id}`, btoa(JSON.stringify({
        value: value,
        timestamp: + new Date()
    })))
}

const emitConsentEvent = () => {
    document.dispatchEvent(new CustomEvent('0x148.consent.accept', {
        value: true
    }))
}

export default container => {
    if (window.localStorage && window.ampConsentReconcile !== undefined) {
        container.querySelectorAll('[data-consent-notification-id]').forEach(element => {
            const consentNotificationId = element.getAttribute('data-consent-notification-id')

            if (getConsentValue(consentNotificationId)) {
                emitConsentEvent()
            } else {
                var notification = document.getElementById(consentNotificationId)

                element.addEventListener('click', event => {
                    storeConsentValue(consentNotificationId, true)
                    notification.setAttribute('disabled', true)
                    emitConsentEvent()
                    event.preventDefault()
                })

                notification.removeAttribute('disabled')
            }
        })
    } else {
        emitConsentEvent()
    }
}
