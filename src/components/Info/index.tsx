import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface InfoProps {
  currentColor: string;
  currentAngle: number;
}

const Info: FC<InfoProps> = ({currentColor, currentAngle}) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.text}>Current Color: {currentColor}</Text>
      <Text style={styles.text}>Current Angle: {currentAngle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
  infoBox: {
    marginTop: 15,
    height: 40,
    justifyContent: 'space-between',
  },
});

export default Info;
