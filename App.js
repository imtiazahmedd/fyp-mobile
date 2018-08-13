import React, {Component} from 'react';
import Router from './app/configs/Routers'
import { Provider } from 'react-redux'
import {store, persistor} from './app/redux/createStore'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    );
  }
}
