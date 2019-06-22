import React, { Component } from 'react';
import { all } from 'rsvp';

import { StoreConsumer } from '../store/Store';
import BaseScreen from './BaseScreen';
import GamePage from '../components/game-page';
import ErrorBoundary from '../components/ErrorBoundary';

export default class GameScreen extends BaseScreen {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StoreConsumer>
        {value => <ErrorBoundary><GamePage {...value} {...this.props} /></ErrorBoundary>}
      </StoreConsumer>
    );
  }
}
