import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { KeepAwake, registerRootComponent } from 'expo';
import store from '~/store';
import App from '~/App';

if (__DEV__) {
  KeepAwake.activate();
}

class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

registerRootComponent(ConnectedApp);
