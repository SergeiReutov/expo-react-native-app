import { StyleSheet } from 'react-native';

export const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginTop: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 10,
  },
  emailInput: {
    marginTop: 30,
    width: '70%'
  },
  passwordInput: {
    marginTop: 10,
    width: '70%'
  },
  loginView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});

export const productsListStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'Roboto',
  }
});

export const productDetailsStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    marginLeft: '5%',
  },
  productsListButtonText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});