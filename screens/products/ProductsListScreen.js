import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Title, Left, Right } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { productsListStyles } from '../../assets/styles/styles';
import { PRODUCTS_LIST } from './__mocks__';

export default class ProductsListScreen extends Component {
  handleProductClick = productId => () => {
    this.props.navigation.navigate('ProductDetails', { productId });
  };

  renderProduct = product => (
    <ListItem icon key={product.id} onPress={this.handleProductClick(product.id)}>
      <Left>
        <AntDesign name={product.icon} size={20}/>
      </Left>
      <Body>
        <Text>{product.name}</Text>
      </Body>
      <Right>
        <AntDesign name="right" />
      </Right>
    </ListItem>
  );

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={productsListStyles.titleText}>
              Products
            </Title>
          </Body>
        </Header>
        <Content>
          <List>
            {PRODUCTS_LIST.map(this.renderProduct)}
          </List>
        </Content>
      </Container>
    );
  }
}