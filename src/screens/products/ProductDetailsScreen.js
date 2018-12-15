import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Body, Text, Button, Icon } from 'native-base';
import { commonStyles, productDetailsStyles } from '~/assets/styles';
import { getParamByName } from '~/selectors/navigation';
import { getProductById } from '~/selectors/products';
import { ProductType } from '~/__types__';

class ProductDetails extends Component {
  handleProductsListClick = () => {
    this.props.navigation.navigate('ProductsList');
  };

  handleBackButtonClick = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { product } = this.props;

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

ProductDetails.propTypes = {
  product: ProductType.isRequired,
};

ProductDetails.defaultProps = {
  product: {},
};

const mapStateToProps = (state, ownProps) => ({
  product: getProductById(state, getParamByName(ownProps, 'productId')),
});

export default connect(mapStateToProps)(ProductDetails);
