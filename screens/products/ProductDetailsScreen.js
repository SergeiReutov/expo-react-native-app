import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Title } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { PRODUCTS_LIST } from './__mocks__';
import { productDetailsStyles } from '../../assets/styles/styles';

export default class ProductDetails extends Component {
  handleProductsListClick = () => {
    this.props.navigation.navigate('ProductsList');
  };

  render() {
    const { navigation: { state: { params: { productId } } } } = this.props;
    const product = PRODUCTS_LIST.find(({ id }) => id === productId);

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <AntDesign name={product.icon} size={30}/>
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
                <Text style={productDetailsStyles.productsListButtonText}>
                  All Products
                </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}