import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { StoreProvider } from './store/Store';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/navigationService';
import Client from './Apollo';

export interface IProps {};
export interface IState {
  fontLoaded: boolean;
};

export default class App extends Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Proxima Nova': require('./assets/fonts/ProximaNovaReg.ttf'),
      'Proxima Nova Bold': require('./assets/fonts/ProximaNovaBold.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const {
      fontLoaded,
    } = this.state;
    if (!fontLoaded) {
      return null;
    }
    return (
      <StoreProvider>
        <ApolloProvider client={Client}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </ApolloProvider>
      </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
