import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  centralizedVerticalView: {
    flex: 1,
    justifyContent: 'center',
  },
  centralizedHorizontalView: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
  titleIcon: {
    fontSize: 24,
    color: 'black',
  },
});
