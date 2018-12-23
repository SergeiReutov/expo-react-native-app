import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Content, Button, Item, Input, Container, Icon, Spinner } from 'native-base';
import { login } from '~/actions/auth';
import { commonStyles, signInStyles } from '~/assets/styles';
import { getIsLoading } from '~/selectors/auth';

class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleLoginButtonClick = () => {
    const { isLoading } = this.props;
    if (this.state.email && this.state.password && !isLoading) {
      this.props.dispatch(login({
        email: this.state.email,
        password: this.state.password,
      }));
    }
  }

  handleInputChange = fieldName => value => this.setState({ [fieldName]: value });

  renderIcon = () => (
    <View>
      <Icon type="SimpleLineIcons" name="login" style={signInStyles.loginIcon} />
    </View>
  );

  renderHeaderText = () => (
    <View>
      <Text style={signInStyles.headerText}>Friday&apos;s shop</Text>
    </View>
  );

  renderEmailInput = () => {
    const { isLoading } = this.props;
    return (
      <View>
        <Item regular style={signInStyles.emailInput}>
          <Input
            placeholder='email'
            value={this.state.email}
            onChangeText={this.handleInputChange('email')}
            editable={!isLoading}
          />
        </Item>
      </View>
    );
  }

  renderPasswordInput = () => {
    const { isLoading } = this.props;
    return (
      <View>
        <Item regular style={signInStyles.passwordInput}>
          <Input
            secureTextEntry
            placeholder='password'
            value={this.state.password}
            onChangeText={this.handleInputChange('password')}
            editable={!isLoading}
          />
        </Item>
      </View>
    );
  }

  renderLoginButton = () => {
    const { isLoading } = this.props;
    return (
      <View style={signInStyles.loginButtonView}>
        <Button full info onPress={this.handleLoginButtonClick} >
          {isLoading
            ? <Spinner color="white" />
            : <Text style={commonStyles.buttonText}>Login</Text>
          }
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={commonStyles.container}>
          <View style={commonStyles.centralized}>
            {this.renderIcon()}
            {this.renderHeaderText()}
            {this.renderEmailInput()}
            {this.renderPasswordInput()}
            {this.renderLoginButton()}
          </View>
        </Content>
      </Container>
    );
  }
}

SignInScreen.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

SignInScreen.defaultProps = {
  isLoading: false,
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(SignInScreen);
