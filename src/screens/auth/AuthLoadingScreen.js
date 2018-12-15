import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { commonStyles } from '~/assets/styles';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // setTimeout to simulate loading userToken
    setTimeout(() => this.props.navigation.navigate(userToken ? 'App' : 'Auth'), 1000);
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
