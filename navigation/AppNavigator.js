import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductsListScreen from '../screens/products/ProductsListScreen';
import ProductDetailsScreen from '../screens/products/ProductDetailsScreen';

const AppStack = createStackNavigator(
  {
    ProductsList: ProductsListScreen,
    ProductDetails: ProductDetailsScreen,
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));