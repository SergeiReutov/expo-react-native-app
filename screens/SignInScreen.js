import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, Button, Item, Input } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { signInStyles } from '../assets/styles/styles';

export default class SignInScreen extends Component {
  handleLoginButtonClick = () => {
    this.props.navigation.navigate('ProductsList');
  }

  render() {
    return (
      <Content style={signInStyles.container}>
        <View style={signInStyles.mainView}>

          <AntDesign name="meh" size={32} style={signInStyles.icon} />

          <Text style={signInStyles.headerText}>Friday's shop</Text>

          <Item regular style={signInStyles.emailInput}>
            <Input placeholder='email' />
          </Item>

          <Item regular style={signInStyles.passwordInput} secureTextEntry>
            <Input placeholder='password' />
          </Item>

          <View style={signInStyles.loginView}>
            <Button info onPress={this.handleLoginButtonClick}>
              <Text style={signInStyles.loginButtonText}>Login</Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}
