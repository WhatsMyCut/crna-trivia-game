import React, { Component } from 'react';
import { Text } from 'react-native';
export interface IProps {}
export interface IState {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    console.log("ERROR:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Text>Something went wrong.</Text>
      );
    }
    return this.props.children;
  }
}
