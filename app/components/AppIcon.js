import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../config/colors';

function AppIcon({
  source,
  title,
  backgroundColor = colors.gray,
  borderRadius = 100,
  iconImageSize = 20,
  iconColor = colors.red,
  padding = 10,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              padding: padding,
            },
          ]}>
          <Image
            resizeMode="contain"
            style={{
              height: iconImageSize,
              width: iconImageSize,
              tintColor: iconColor,
            }}
            source={source}
          />
        </View>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 25,
    width: 25,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Bariol-Bold',
    color: colors.red,
    marginTop: 8,
  },
});
export default AppIcon;
