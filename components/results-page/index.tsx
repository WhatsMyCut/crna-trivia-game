import React, { Component } from 'react';
import { Styles } from '../../assets/styles/Styles';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import { IQuestion } from '../../models/IQuestion';
import Result from './Result';
import { Ionicons } from '@expo/vector-icons';
import { RetrieveData } from '../../store/AsyncStore';
const styles = { ...Styles, ...{

}};

export interface IProps {};
export interface IState {
  questions?: any;
  isLoaded?: boolean;
};

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

  renderQuestion(x: IQuestion, i: number) {
    return new Result(x, i).render();
  }

  render () {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    const { questions } = this.state;
    const numQs = questions.length;
    const correct = questions.filter((x: IQuestion) => {
      return (x.correct_answer === x.given_answer);
    }).length;
    const results = questions.map((value: IQuestion, index: number) => this.renderQuestion(value, index))
    console.log('RESULTS: ', results);
    return (
      <SafeAreaView style={[styles.container, styles.coverScreen, styles.centerAll]}>
        <ScrollView contentContainerStyle={[styles.safeArea, styles.container]}>
          <View style={[styles.headerContainer]}>
            <Text style={[styles.headerText]}>
              You Scored
            </Text>
            <Text style={[styles.headerText]}>
              { correct } / {numQs}
            </Text>
          </View>
          <View style={[styles.container]}>
            { results }
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}
