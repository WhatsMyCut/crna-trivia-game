import React, { Component } from 'react';
import { all } from 'rsvp';

import { StoreConsumer } from '../store/Store';
import BaseScreen from './BaseScreen';
import LandingPage from '../components/landing-page';
import ErrorBoundary from '../components/ErrorBoundary';

export default class AuthLoading extends BaseScreen {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StoreConsumer>
        {value => <ErrorBoundary><LandingPage {...value} {...this.props} /></ErrorBoundary>}
      </StoreConsumer>
    );
  }
}
