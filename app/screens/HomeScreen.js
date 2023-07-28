import React from 'react';
import {View, StyleSheet, Image, Text, Switch} from 'react-native';
import AppIcon from '../components/AppIcon';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function HomeScreen(props) {
  return (
    <ScreenComponent>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="contain"
              source={require('../assets/profile.jpg')}
              style={styles.profileImage}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontWeight: '500'}}>Angela juliat</Text>
            <Text style={{fontSize: 12, color: colors.gray}}>PWKD43573663</Text>
          </View>
          <View style={{flex: 1}} />
          <View style={styles.bellIconContainer}>
            <Image
              resizeMode="contain"
              style={{height: 30, width: 30}}
              source={require('../assets/bell.png')}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 20,
            marginTop: 20,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/alarm.png')}
              style={{height: 40, width: 40, marginRight: 10}}
            />
            <View>
              <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 5}}>
                Clock Out
              </Text>
              <Text style={{color: colors.gray}}>
                Clocked in 17 mar 2023 19:08 am
              </Text>
            </View>
            <View style={{flex: 1}} />
            <Switch />
          </View>
          <View></View>
        </View>
      </View>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    overflow: 'hidden',
    height: 54,
    width: 54,
    borderRadius: 27,
    marginRight: 10,
  },
  profileImage: {
    width: 54,
    height: 54,
  },
  bellIconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
  },
});
export default HomeScreen;
