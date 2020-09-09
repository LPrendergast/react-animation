import React, { useEffect } from "react";
import { Animated } from "react-native";
import styled from "styled-components";

const BallComponent = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: black;
`;

export const Ball = () => {
  const position = new Animated.ValueXY(0, 0);

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: false,
    }).start();
  });

  return (
    <Animated.View style={position.getLayout()}>
      <BallComponent />
    </Animated.View>
  );
};
