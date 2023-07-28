import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import AppButton from '../components/AppButton';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function SplashScreen(props) {
  return (
    <ScreenComponent>
      <View style={styles.container}>
        <View style={styles.topImageContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/onboarding1.png')}
            style={styles.topImage}
          />
        </View>
        <View style={{}}>
          <Image source={require('../assets/onboarding2.png')} />
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Personalised Security</Text>
          <Text style={styles.titleText}>Solutions</Text>
        </View>
        <View style={styles.subTitleTextContainer}>
          <Text style={styles.subTitleText}>
            At Perth Guards and Patrols, we provide a
          </Text>
          <Text style={styles.subTitleText}>
            {' '}
            wide range of security services
          </Text>
        </View>
        <AppButton />
        <Text style={styles.loginText}>Log in</Text>
      </View>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  topImageContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: '50%',
    height: '50%',
  },
  titleTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 34,
    fontWeight: '500',
  },
  subTitleTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleText: {
    fontSize: 18,
    color: colors.gray,
  },
  loginText: {
    marginTop: 30,
    color: colors.lightBrown,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default SplashScreen;
