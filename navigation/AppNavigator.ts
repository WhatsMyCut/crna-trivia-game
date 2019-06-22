import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import GameScreen from '../screens/GameScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Game: GameScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
