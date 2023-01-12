import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

import Wheel from '@components/Wheel';
import Info from '@components/Info';

import {styles} from './styles';

export const OneScreenExample = () => {
  const rotation = useSharedValue(0);
  const [currentAngle, setCurrentAngle] = useState(rotation.value);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const handleAngle = (value: number) => {
    setCurrentAngle(parseInt(value.toFixed(), 10));
  };

  const easing = Easing.bezier(0.23, 1, 0.32, 1);

  const gesture = Gesture.Pan().onUpdate(e => {
    rotation.value = withTiming(
      Math.abs(e.velocityY) / 7 + rotation.value,
      {
        duration: 1000,
        easing: easing,
      },
      () => runOnJS(handleAngle)(rotation.value % 360),
    );
  });

  const getCurrentColor = () => {
    if (currentAngle < 91) return 'Red';
    if (currentAngle < 181) return 'Green';
    if (currentAngle < 271) return 'Yellow';
    return 'Blue';
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <View style={styles.circleContainer}>
          <View style={styles.pointer} />
          <Animated.View style={[styles.circle, animatedStyles]}>
            <Wheel />
          </Animated.View>
        </View>
      </GestureDetector>
      <Info currentAngle={currentAngle} currentColor={getCurrentColor()} />
    </SafeAreaView>
  );
};
