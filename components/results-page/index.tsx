import React, { Component } from 'react';
import { Styles } from '../../assets/styles/Styles';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RetrieveData } from '../../store/AsyncStore';
const styles = { ...Styles, ...{

}};

export interface IProps {};
export interface IState {
  questions?: any;
  isLoaded?: boolean;
};

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
  given_answer?: string;
}


export default class ResultsPage extends Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props);
    this.state = {...state, ...{
      isLoaded: false,
    }}
  }

  componentWillMount() {
    RetrieveData('questions')
    .then(questions =>this.setState({questions, isLoaded: true,}));
  }

  render () {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    const { questions } = this.state;
    console.log('RESULTS: ', questions);
    return (
      <SafeAreaView style={[styles.container, styles.coverScreen, styles.centerAll]}>
        <View style={[styles.topNav]}>
          <View style={[styles.headerContainer]}>
            <Text style={[styles.headerText]}>
              {questions.length}
            </Text>
          </View>
        </View>
      </SafeAreaView>

    );
  }
}
