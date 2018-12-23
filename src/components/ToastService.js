import { Toast } from 'native-base';

function showToast(message) {
  return (
    Toast.show({
      text: message,
      buttonText: 'Okay',
      duration: 3000,
      type: 'danger',
    })
  );
}

const ToastService = {
  showToast,
};

export default ToastService;
