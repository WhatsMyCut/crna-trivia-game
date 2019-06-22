import React, { Component } from 'react';
import { Text, NativeSyntheticEvent, NativeTouchEvent, ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  View,
  Button,
} from 'react-native';
import { AllHtmlEntities as entities } from 'html-entities';
import { Styles } from '../../assets/styles/Styles';
//import { StoreConsumer } from '../../store/Store';
//import Home from './Home';
import navigationService from '../../navigation/navigationService';
import GameNav from '../game-nav';
import Colors from '../../assets/styles/Colors';
const styles = { ...Styles, ...{

}};
export interface IProps {
  navigation: any;
}

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
  given_answer?: string;
}

export interface IState {
  questions: [IQuestion];
  currentQuestion?: IQuestion;
  x?: number;
  y?: number;
  isLoaded?: boolean;
}

export const getQuestionsFromApiAsync = () => {
  console.log('getQuestionsFromApiAsync');
  return fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default class GamePage extends Component<IProps, IState> {
  constructor(props: IProps, iState: IState) {
    super (props);
    this.state = {...iState, ...{x: 1, y: 0, isLoaded: false,}};
    this.onPressAnswerTrue.bind(this);
    this.onPressAnswerFalse.bind(this);
  }

  async componentDidMount() {
    const result = await getQuestionsFromApiAsync();
    if (result) {
      console.log('qs', result)
      if (result.response_code === 0) {
        const questions = result.results;
        const currentQuestion = questions[0]
        const y = questions.length;
        const x = 1;
        this.setState({questions, currentQuestion, x, y, isLoaded: true});
      } else {
        const currentQuestion: IQuestion = {
          "category": "Error",
          "question": "Sorry there was a network error.",
          "type": null,
          "difficulty": null,
          "incorrect_answers": null,
          "correct_answer": null,
        }
        this.setState({
          'questions': [currentQuestion],
          currentQuestion,
          x: 1,
          y: 1,
          isLoaded: true,
        })
      }
    }
  }

  setNewState = (state: IState) => {
    this.state = state;
  }

  onPressAnswerTrue() {
    console.log('onPressAnswerTrue', this);
    const { questions, currentQuestion, x, y } = this.state
    currentQuestion.given_answer = "True";
    if (x <= y) {
      const nX = x+1;
      this.setState({
        currentQuestion: questions[nX],
        x: nX,
      });
    } else {
      this.setState({currentQuestion: null})
      this.props.navigation.navigate('ResultsPage')
    }
  }
  onPressAnswerFalse() {
    console.log('onPressAnswerFalse');
  }
  render() {
    const {x, y, isLoaded} = this.state;
    let content, category, controls;
    if (!isLoaded) {
      category = "Loading...";
      content = (<ActivityIndicator size="large" color="#0000ff" />);
    } else {
      const { questions } = this.state;
      const currQ = questions[x-1];
      category = currQ.category;
      const qText = entities.decode(currQ.question);
      content = (
        <View style={[styles.container, styles.componentContainer, styles.centerAll]}>
          <Text style={[styles.headerText]}>{qText}</Text>
        </View>
      );
      controls = (
        <View style={[styles.componentContainer]}>
          <View style={[styles.buttonContainerTrue]}>
            <Button
              onPress={() => this.onPressAnswerTrue()}
              title="True"
              color={Colors.white}
            />
          </View>
          <View style={[styles.buttonContainerFalse]}>
            <Button
              onPress={this.onPressAnswerFalse}
              title="False"
              color={Colors.white}
              />
            </View>
        </View>
      )
    }
    return (
      <SafeAreaView style={[styles.container, styles.coverScreen, styles.centerAll]}>
        <GameNav navigation={this.props.navigation} />
        <View style={[styles.safeArea, styles.container]}>
          <Text style={[styles.title, styles.questionTitle]}>
            { category }
          </Text>
          <View style={[styles.gameBox, styles.container, styles.centerText, { paddingHorizontal: 20, }]}>
            { content }
            { controls }
          </View>
          <Text style={[styles.callToAction]}>
            {x} of {y}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
