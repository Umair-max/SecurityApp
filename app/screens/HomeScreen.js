import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Switch,
  TextInput,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';

import AppIcon from '../components/AppIcon';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';

function HomeScreen(props) {
  return (
    <ScreenComponent style={{backgroundColor: colors.backgroundColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={{fontSize: 12, color: colors.gray}}>
                PWKD43573663
              </Text>
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
          <View style={styles.topContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/clock.png')}
                style={{height: 40, width: 40, marginRight: 10}}
              />
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: '500', marginBottom: 5}}>
                  Clock Out
                </Text>
                <Text style={{color: colors.gray}}>
                  Clocked in 17 mar 2023 19:08 am
                </Text>
              </View>
              <View style={{flex: 1}} />
              <Switch />
            </View>
            <View style={styles.searchBar}>
              <AppIcon
                source={require('../assets/search.png')}
                iconColor={colors.gray}
              />
              <TextInput placeholder="Search" style={{width: '75%'}} />
              <AppIcon
                source={require('../assets/slider.png')}
                iconColor={colors.gray}
              />
            </View>
          </View>
          <View style={styles.selectionButtonContainer}>
            <View
              style={[
                styles.selectionButton,
                {backgroundColor: colors.backgroundColor},
              ]}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>Personal</Text>
            </View>
            <View style={styles.selectionButton}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>Teams</Text>
            </View>
          </View>
          <View style={styles.card}>
            <AppIcon
              backgroundColor={colors.backgroundColor}
              source={require('../assets/alarm.png')}
              iconImageSize={35}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.cardTitle}>Alarms</Text>
              <Text style={{color: colors.gray}}>No new alarms</Text>
            </View>
          </View>
          <View style={styles.card}>
            <AppIcon
              backgroundColor={colors.backgroundColor}
              source={require('../assets/file.png')}
              iconImageSize={35}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.cardTitle}>New Task</Text>
              <Text style={{color: colors.gray}}>No new alarms</Text>
            </View>
          </View>
          <View style={styles.card}>
            <AppIcon
              backgroundColor={colors.backgroundColor}
              source={require('../assets/progress.png')}
              iconImageSize={35}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.cardTitle}>In Progress</Text>
              <Text style={{color: colors.gray}}>No new alarms</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.white,
              padding: 20,
              marginTop: 20,
              borderRadius: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AppIcon
                backgroundColor={colors.backgroundColor}
                source={require('../assets/tick.png')}
                iconImageSize={35}
              />
              <View style={{marginLeft: 10}}>
                <Text style={styles.cardTitle}>Completed Task</Text>
                <Text style={{color: colors.gray}}>Completed</Text>
              </View>
            </View>
            <View style={styles.line} />
            <View>
              <View style={styles.bottomCardTextContainer}>
                <Text style={{color: colors.gray}}>firday, 17 Mar</Text>
                <Text style={{color: colors.gray}}>19:09- 19:32 AWAST</Text>
              </View>
              <View style={styles.bottomCardTextContainer}>
                <Text>COR - Stan Twight</Text>
                <Text>Subtask 3/3 </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text>Greenkeepers shed -Tag 132</Text>
                <Text style={{color: colors.gray}}>completed</Text>
              </View>
              <Progress.Bar
                progress={1}
                width={null}
                color={colors.green}
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundColor,
  },
  topContainer: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
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
  searchBar: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  selectionButtonContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 15,
    borderRadius: 15,
  },
  selectionButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  bottomCardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 0.2,
    backgroundColor: colors.gray,
    marginVertical: 20,
  },
});
export default HomeScreen;
