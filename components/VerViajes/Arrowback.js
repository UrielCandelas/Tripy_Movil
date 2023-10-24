import React from 'react';
import Svg, { Circle, Image } from 'react-native-svg';

export default function Arrowback({ style, onPresshandler }) {
  return (
    <Svg height="50" width="50" style={style} onPress={onPresshandler}>
      <Circle cx="25" cy="25" r="20" fill="#F2F2F2" />
      <Image
        x="11"
        y="10"
        width="30"
        height="30"
        href={require('../../images/ArrowLeft.png')}
      />
    </Svg>
  );
}
