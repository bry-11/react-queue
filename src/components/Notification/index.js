import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainerT } from './style'

class Notification extends React.Component {
    notify = (type, message) => {
        switch (type) {
            case 'fail': {
                toast.error(message)
                break
            }
            case 'ok': {
                toast.success(message)
                break
            }
            case 'alert': {
                toast.warning(message)
                break
            }
            default: {
                toast.info(message)
                break
            }
        }
    }

    render() {
        const { children } = this.props
        return (
            <>
                {children && children({ notify: this.notify })}
                <ToastContainerT
                    autoClose={4000}
                    hideProgressBar
                    closeOnClick
                    style={{ top: '8rem' }}
                    position="top-right"
                    type="default"
                    newestOnTop
                />
            </>
        )
    }
}

export default Notification
