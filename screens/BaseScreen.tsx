import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { ScreenOrientation } from 'expo';

export interface IProps {
  navigation?: any;
}

export interface IState {
  isPortrait: boolean;
}

export default class BaseScreen extends Component<IProps, IState> {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarVisible:
      navigation.state.params && navigation.state.params.tabBarHidden
        ? false
        : true,
  });

  state: IState = {
    isPortrait: true,
  };

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    .catch(e => console.log(e));
    Dimensions.addEventListener('change', this.orientationChangeHandler);
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    .catch(e => console.log(e));
    Dimensions.removeEventListener('change', this.orientationChangeHandler);
  }

  orientationChangeHandler = dims => {
    const { width, height } = dims.window;
    const isLandscape = width > height;
    this.setState({ isPortrait: !isLandscape });
    this.props.navigation.setParams({ tabBarHidden: isLandscape });
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    .catch(e => console.log(e));
  };

  switchToLandscape = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  };

  switchToPortrait = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  };
}
