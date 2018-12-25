import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { KeepAwake, registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';
import { Root } from 'native-base';
import { commonStyles } from '~/assets/styles';
import store from '~/store';
import App from '~/App';

if (__DEV__) {
  KeepAwake.activate();
}

class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <SafeAreaView style={commonStyles.safeArea}>
            <App />
          </SafeAreaView>
        </Root>
      </Provider>
    );
  }
}

registerRootComponent(ConnectedApp);
