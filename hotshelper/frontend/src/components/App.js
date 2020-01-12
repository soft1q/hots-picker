import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import css from '../../static/style.css';

import Header from './layout/Header';
import Picker from './picker/Picker';

import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div>
                        <Picker />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));