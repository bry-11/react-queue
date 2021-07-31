import { GenericError } from '../assets'

export const getMessage = (message) => {
    if (message.data && message.data.errors) {
        const values = Object.values(message.data.errors)
        if (values.length > 0) {
            let msg = ''
            values.forEach((err) => {
                err.forEach((e) => {
                    msg = `${msg}${msg.length !== 0 ? '.' : ''} ${e}`
                })
            })
            return msg
        }
    } else if (message.data && message.data.message) {
        return message.data.message
    }
    return GenericError
}
