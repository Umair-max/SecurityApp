import React from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';
import AppButton from '../components/AppButton';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function LoginScreen(props) {
  return (
    <ScreenComponent style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topImageContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/onboarding1.png')}
            style={styles.topImage}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: '100%',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Login To Your Account
          </Text>
          <Text style={{color: colors.gray, marginBottom: 40, marginTop: 5}}>
            Make sure that you already have an account.
          </Text>
          <Text style={styles.inputTextLabel}>Staff ID</Text>
          <View style={styles.inputTextContainer}>
            <TextInput placeholder="Enter your id " style={styles.inputText} />
          </View>
          <Text style={[styles.inputTextLabel, {marginTop: 15}]}>Password</Text>
          <View style={styles.inputTextContainer}>
            <TextInput
              placeholder="Enter your password"
              style={styles.inputText}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 40,
            }}>
            <View style={styles.tickBox} />
            <Text style={styles.stayText}>Stay Loggined</Text>
            <View style={{flex: 1}} />
            <Text style={styles.fogotText}>Forgot Password?</Text>
          </View>
          <AppButton />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.stayText}>Don’t have an account ? </Text>
            <Text style={styles.fogotText}>Sign up</Text>
          </View>
          <View style={styles.linesContainer}>
            <View style={styles.line} />
            <Text style={{marginHorizontal: 3}}>OR</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.googleTextContainer}>
            <Image
              source={require('../assets/google.png')}
              style={styles.googleIcon}
            />
            <Text style={styles.signupText}>Sign up with Google</Text>
          </View>
        </View>
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
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage: {
    width: '50%',
    height: '50%',
  },
  inputTextLabel: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 5,
  },
  inputText: {
    fontSize: 18,
  },
  inputTextContainer: {
    paddingVertical: 20,
    borderColor: colors.lightGray,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  tickBox: {
    height: 25,
    width: 25,
    borderRadius: 5,
    borderColor: colors.lightGray,
    borderWidth: 2,
  },
  stayText: {
    color: colors.gray,
    fontSize: 16,
    marginLeft: 10,
  },
  fogotText: {
    color: colors.red,
    fontSize: 16,
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  signupText: {
    fontSize: 16,
    fontWeight: '400',
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  line: {
    backgroundColor: colors.gray,
    height: 1,
    flex: 1,
  },
  googleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 10,
    paddingVertical: 12,
  },
});
export default LoginScreen;
