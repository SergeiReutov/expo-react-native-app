import { StyleSheet } from 'react-native';
import { white, black, gray } from './theme';

const centralizedVertical = {
  flex: 1,
  justifyContent: 'center',
};

const centralizedHorizontal = {
  flex: 1,
  alignItems: 'center',
};

export const commonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: gray,
  },
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
