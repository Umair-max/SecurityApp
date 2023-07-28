import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

function AppButton(props) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBrown,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default AppButton;
