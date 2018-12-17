import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Content, Button, Item, Input, Container, Icon } from 'native-base';
import { login } from '~/actions/auth';
import { commonStyles, signInStyles } from '~/assets/styles';

class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLoginButtonClick = () => {
    if (this.state.email || this.state.password) {
      this.props.dispatch(login({
        email: this.state.email,
        password: this.state.password,
      }));
    }
  }

  handleInputChange = fieldName => value => this.setState({ [fieldName]: value });

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
                <Input
                  placeholder='email'
                  value={this.state.email}
                  onChangeText={this.handleInputChange('email')}
                />
              </Item>
            </View>

            <View>
              <Item regular style={signInStyles.passwordInput}>
                <Input
                  secureTextEntry
                  placeholder='password'
                  value={this.state.password}
                  onChangeText={this.handleInputChange('password')}
                />
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

export default connect()(SignInScreen);
