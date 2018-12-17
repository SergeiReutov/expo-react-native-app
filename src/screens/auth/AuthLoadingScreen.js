import React from 'react';
import { View } from 'react-native';
import { SecureStore } from 'expo';
import { Container, Content, Spinner } from 'native-base';
import { commonStyles } from '~/assets/styles';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await SecureStore.getItemAsync('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={commonStyles.container}>
          <View style={commonStyles.centralized}>

            <Spinner color='black' />

          </View>
        </Content>
      </Container>
      
    );
  }
}
