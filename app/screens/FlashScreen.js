import React from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function FlashScreen(props) {
  return (
    <ScreenComponent style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/onboarding1.png')}
          style={styles.image}
        />
      </View>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBrown,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    tintColor: 'white',
    width: '85%',
    height: '85%',
  },
});
export default FlashScreen;
