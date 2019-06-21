import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import { ApolloProvider } from 'react-apollo';

export interface IProps {};
export interface IState {
  fontLoaded: boolean;
};

export default class App extends Component <IProps, IState> {
  constructor(props) {
    super(props);
  }

  state: IState = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      // 'Proxima Nova': require('./assets/fonts/ProximaNovaReg.ttf'),
      // 'Proxima Nova Bold': require('./assets/fonts/ProximaNovaBold.ttf'),
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
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
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
