import { StyleSheet } from 'react-native';
import { gray } from '~/assets/styles';

export const errorModalStyles = StyleSheet.create({
  modalView: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: 5,
    padding: 10,
  },
  textView: {
    marginBottom: 10,
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
