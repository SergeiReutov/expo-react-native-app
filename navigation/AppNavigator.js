import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import ProductsListScreen from '../screens/products/ProductsListScreen';
import ProductDetailsScreen from '../screens/products/ProductDetailsScreen';

export default createStackNavigator({
  SignIn: SignInScreen,
  ProductsList: ProductsListScreen,
  ProductDetails: ProductDetailsScreen
});
