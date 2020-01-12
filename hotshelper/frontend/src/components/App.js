import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import css from '../../static/style.css';

import Header from './layout/Header';
import Picker from './picker/Picker';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Profile from './profile/Profile';


import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Picker} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                        </Switch>
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));