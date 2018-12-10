import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button, Icon } from 'native-base';
import { PRODUCTS_LIST } from './__mocks__';
import { commonStyles, productDetailsStyles } from '../../assets/styles';

export default class ProductDetails extends Component {
  handleProductsListClick = () => {
    this.props.navigation.navigate('ProductsList');
  };

  handleBackButtonClick = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigation: { state: { params: { productId } } } } = this.props;
    const product = PRODUCTS_LIST.find(({ id }) => id === productId);

    return (
      <Container>
        <Content contentContainerStyle={commonStyles.container}>
          <View style={commonStyles.centralizedVerticalView}>

            <Card>

              <CardItem header>
                <Icon type="Entypo" name={product.icon} size={30}/>
                <Text style={productDetailsStyles.headerText}>
                  {product.name}
                </Text>
              </CardItem>

              <CardItem>
                <Body>
                  <Text>
                    {product.description}
                  </Text>
                </Body>
              </CardItem>

              <CardItem footer>
                <Button info onPress={this.handleProductsListClick}>
                  <Text style={commonStyles.buttonText}>
                    All Products
                  </Text>
                </Button>
              </CardItem>

            </Card>

          </View>
        </Content>
      </Container>
    );
  }
}
