import React, { Component } from 'react';
import { Text } from 'react-native';

//import { StoreConsumer } from '../../store/Store';
//import Home from './Home';
//import navigationService from '../../navigation/navigationService';
import {RetrieveData, StoreData} from '../../store/AsyncStore';

export interface IProps {
  navigation: any;
}

export default class LandingPage extends Component<IProps> {
  async componentDidMount() {
    this.props.navigation.navigate('AuthLoading');
  }
  render() {
    return (
      <Text>
        Landing Page
      </Text>
    );
  }
}
