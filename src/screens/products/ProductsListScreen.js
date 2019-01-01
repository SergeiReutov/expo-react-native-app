import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SecureStore } from 'expo';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Title,
  Left,
  Right,
  Button,
  Icon,
  Spinner,
} from 'native-base';
import { ErrorModal, NoResults } from '~/components';
import { commonStyles, productsListStyles, black } from '~/assets/styles';
import { fetchProducts, clearError } from '~/actions/products';
import { getProductsList, getIsLoading, getError } from '~/selectors/products';
import { ProductType, ErrorType } from '~/__types__';

const PAGE_SIZE = 20;

class ProductsListScreen extends Component {
  state = {
    startsFrom: 0,
  };

  componentDidMount() {
    this.props.dispatch(fetchProducts(
      this.state.startsFrom,
      PAGE_SIZE,
    ));
  }

  handleProductClick = productId => () => {
    this.props.navigation.navigate('ProductDetails', { productId });
  };

  handleLogoutButtonClick = async () => {
    await SecureStore.deleteItemAsync('userToken');
    this.props.navigation.navigate('Auth');
  };

  handleErrorClear = () => this.props.dispatch(clearError());

  renderProduct = product => (
    <ListItem icon key={product.id} onPress={this.handleProductClick(product.id)}>
      <Left>
        <Icon type="Entypo" name={product.icon} style={productsListStyles.productIcon} />
      </Left>
      <Body>
        <Text>{product.name}</Text>
      </Body>
      <Right>
        <Icon type="Entypo" name="chevron-right" />
      </Right>
    </ListItem>
  );

  renderProductsList = () => {
    const { productsList } = this.props;
    return productsList.length
      ? (
        <List>
          {productsList.map(this.renderProduct)}
        </List>
      )
      : <NoResults />;
  }

  render() {
    const { isLoading, error } = this.props;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={commonStyles.titleText}>
              Products
            </Title>
          </Body>
          <Right>
            <Button transparent onPress={this.handleLogoutButtonClick}>
              <Icon type="SimpleLineIcons" name='logout' style={commonStyles.titleIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
          {isLoading
            ? <Spinner color={black} />
            : this.renderProductsList()
          }
          {error !== null && <ErrorModal error={error} onClose={this.handleErrorClear} />}
        </Content>
      </Container>
    );
  }
}

ProductsListScreen.propTypes = {
  productsList: PropTypes.arrayOf(ProductType).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: ErrorType,
};

ProductsListScreen.defaultProps = {
  productsList: [],
};

const mapStateToProps = state => ({
  productsList: getProductsList(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps)(ProductsListScreen);
