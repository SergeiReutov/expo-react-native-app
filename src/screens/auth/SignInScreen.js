import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Content, Button, Item, Input, Container, Icon } from 'native-base';
import { commonStyles, signInStyles } from '~/assets/styles';

export default class SignInScreen extends Component {
  handleLoginButtonClick = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={commonStyles.container}>
          <View style={commonStyles.centralized}>

            <View>
              <Icon type="SimpleLineIcons" name="login" style={signInStyles.loginIcon} />
            </View>

            <View>
              <Text style={signInStyles.headerText}>Friday&apos;s shop</Text>
            </View>

            <View>
              <Item regular style={signInStyles.emailInput}>
                <Input placeholder='email' />
              </Item>
            </View>

            <View>
              <Item regular style={signInStyles.passwordInput} secureTextEntry>
                <Input placeholder='password' />
              </Item>
            </View>

            <View style={signInStyles.loginButtonView}>
              <Button info onPress={this.handleLoginButtonClick}>
                <Text style={commonStyles.buttonText}>Login</Text>
              </Button>
            </View>

          </View>
        </Content>
      </Container>
    );
  }
}
