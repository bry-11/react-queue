import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import GeneralContext from './context/GeneralContext'
import Routes from './routes'
import Notification from './components/Notification'

class App extends React.Component {
    childRef = React.createRef(null)

    constructor(props) {
        super(props)
        this.state = {
            notification: {
                type: '',
                message: '',
            },
        }
    }

    onSetNotification = (notification) => {
        this.setState({ notification })
    }

    displayToast = (notification) => {
        if (this.childRef) {
            this.childRef.current.notify(notification.type, notification.message)
        }
        return true
    }

    render() {
        const { notification } = this.state
        return (
            <GeneralContext.Provider
                value={{
                    displayToast: this.displayToast,
                    onSetNotification: this.onSetNotification,
                }}
            >
                <Notification ref={this.childRef}>
                    {({ notify }) => {
                        if (notification.type !== '') {
                            notify(notification.type, notification.message)
                        }
                        return <></>
                    }}
                </Notification>
                <Routes />
            </GeneralContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
unregisterServiceWorker()
