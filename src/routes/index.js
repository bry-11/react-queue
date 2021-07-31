import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import BlockUi from 'react-block-ui'

const Client = React.lazy(() => import('../pages/Client'))

const Routes = () => (
    <React.Suspense fallback={<BlockUi blocking />}>
        <Router basename={process.env.REACT_APP_SUB_DIRECTORY}>
            <Switch>
                <Route path="/" render={(props) => <Client {...props} />} />
            </Switch>
        </Router>
    </React.Suspense>
)

export default Routes
