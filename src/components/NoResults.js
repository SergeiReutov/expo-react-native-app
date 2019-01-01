import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { noResultsStyles } from '~/assets/styles';

export function NoResults() {
  return (
    <View style={noResultsStyles.view}>
      <Text style={noResultsStyles.text}>There is no data to display</Text>
    </View>
  );
}
