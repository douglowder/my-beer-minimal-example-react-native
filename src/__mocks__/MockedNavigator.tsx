/* eslint-env jest */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

type TProps = {
  Component: React.ComponentType;
};

const Stack = createNativeStackNavigator();

export function MockedNavigator(props: TProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={props.Component} name="MockedScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
