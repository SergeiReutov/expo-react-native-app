import { StyleSheet } from 'react-native';
import { white, black } from './theme';

const centralizedVertical = {
  flex: 1,
  justifyContent: 'center',
};

const centralizedHorizontal = {
  flex: 1,
  alignItems: 'center',
};

export const commonStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  centralizedVerticalView: centralizedVertical,
  centralizedHorizontalView: centralizedHorizontal,
  centralized: {
    ...centralizedVertical,
    ...centralizedHorizontal,
  },
  buttonText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: white,
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
  titleIcon: {
    fontSize: 24,
    color: black,
  },
});
