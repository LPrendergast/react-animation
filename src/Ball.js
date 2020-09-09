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
  useEffect(() => {
    const position = new Animated.ValueXY(0, 0);
    Animated.spring(position, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View>
      <BallComponent />
    </Animated.View>
  );
};
