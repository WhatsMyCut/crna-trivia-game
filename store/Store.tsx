import React, { Component } from 'react';
import navigationService from '../navigation/navigationService';
import { StoreData, RetrieveData } from './AsyncStore';

// a store to hold the react context api
export const Store = React.createContext({
  questions: null,
});

export class StoreProvider extends Component {
  state = {
    isLoading: true,
  };


	async componentDidMount() {
		try {
      // check if async storage has the data
      const questions = await RetrieveData('phone');
      if (questions) {
        this.setState({questions})
        navigationService.navigate('GameScreen', {});
      } else {
        await StoreData('questions', null)
				navigationService.navigate('AuthLoading', {});
      }
		} catch (e) {
			console.log(e);
		}
	}

	appReady = () => {
		this.setState({ isLoading: false });
	};

	render() {
		return (
			<Store.Provider
				value={{
					store: this.state,
					appReady: this.appReady,
				}}
			>
				{this.props.children}
      </Store.Provider>
		);
	}
}

// for components to access the store
export const StoreConsumer = Store.Consumer;
