import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Animated, Easing } from 'react-native';

export default function AnimatedInput({ label, duration = 200, width, height, labelColor = 'black', secureTextEntry,onChange,value,keyboardType }, style) {
  const transY = useRef(new Animated.Value(0));
  const borderWidth = useRef(new Animated.Value(0));
  const backgroundColor = useRef(new Animated.Value(0));

  const handleFocus = () => {
    animateTranform(-45);
    animateBorderWidth(2);
    animateBackgroundColor(1);
  };

  const handleBlur = () => {
    if (value) return;
    animateTranform(0);
    animateBorderWidth(0);
    animateBackgroundColor(0);
  };

  const animateTranform = (toValue) => {
    Animated.timing(transY.current, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const animateBorderWidth = (toValue) => {
    Animated.timing(borderWidth.current, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  const background = backgroundColor.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['lightgrey', 'white'],
    extrapolate: 'clamp',
  });

  const transX = transY.current.interpolate({
    inputRange: [-40, 0],
    outputRange: [-20, 0],
    extrapolate: 'clamp',
  });

  const borderColor = borderWidth.current.interpolate({
    inputRange: [0, 2],
    outputRange: ['grey', '#64CCC5'],
    extrapolate: 'clamp',
  });


  const labelColorAnimation = borderWidth.current.interpolate({
    inputRange: [0, 2],
    outputRange: ['grey', labelColor],
    extrapolate: 'clamp',
  });

  const animateBackgroundColor = (toValue) => {
    Animated.timing(backgroundColor.current, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, { borderWidth: borderWidth.current, borderColor, width, height }, style]}>
      <Animated.View style={[styles.labelContainer, { transform: [{ translateY: transY.current }, { translateX: transX }] }]}>
        <Animated.Text style={{ color: labelColorAnimation }}>{label}</Animated.Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '60%',
    justifyContent: 'center',
    marginTop: 30,
  },
  input: {
    padding: 10,
    height: 40,
  },
  labelContainer: {
    position: 'absolute',
    padding: 20,
  },
});
