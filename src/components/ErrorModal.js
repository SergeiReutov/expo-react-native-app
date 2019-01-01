import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Text, Button } from 'native-base';
import { commonStyles, errorModalStyles } from '~/assets/styles';
import { ErrorType } from '~/__types__';

function ErrorModalImpl(props) {
  const { error, onClose, dispatch } = props;

  const handleRetryClick = () => {
    dispatch({
      type: error.action,
      ...error.params,
    });
  };

  return (
    <View>
      <Modal isVisible>
        <View style={errorModalStyles.modalView}>

          <View style={errorModalStyles.textView}>
            <Text>{error.message}</Text>
          </View>

          <View style={errorModalStyles.buttonsView}>
            <Button info onPress={handleRetryClick}>
              <Text style={commonStyles.buttonText}>
                Retry
              </Text>
            </Button>
            <Button info onPress={onClose}>
              <Text style={commonStyles.buttonText}>
                Close
              </Text>
            </Button>
          </View>

        </View>
      </Modal>
    </View>
  );
}

ErrorModalImpl.propTypes = {
  error: ErrorType.isRequired,
  onClose: PropTypes.func.isRequired,
};

ErrorModalImpl.defaultProps = {
  error: {},
  onClose: () => {},
};

export const ErrorModal = connect()(ErrorModalImpl);


