import React, { Component } from 'react';
import { all } from 'rsvp';

import { StoreConsumer } from '../store/Store';
import BaseScreen from './BaseScreen';
import ResultsPage from '../components/results-page';
import ErrorBoundary from '../components/ErrorBoundary';

export default class ResultsScreen extends BaseScreen {
  render() {
    return (
      <StoreConsumer>
        {value => <ErrorBoundary><ResultsPage {...value} {...this.props} /></ErrorBoundary>}
      </StoreConsumer>
    );
  }
}
