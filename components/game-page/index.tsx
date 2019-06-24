import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  View,
  Button,
} from 'react-native';
import { AllHtmlEntities as entities } from 'html-entities';
import { Styles } from '../../assets/styles/Styles';
import navigationService from '../../navigation/navigationService';
import GameNav from '../game-nav';
import Colors from '../../assets/styles/Colors';
import { StoreData, RemoveData } from '../../store/AsyncStore';
import { IQuestion, renderCategoryIcon, IconTypes } from '../../models/IQuestion';
import { LinearGradient } from 'expo-linear-gradient';
const styles = { ...Styles, ...{

}};
export interface IProps {
  navigation?: any;
}


export interface IState {
  questions?: [IQuestion];
  currentQuestion?: IQuestion;
  x?: number;
  y?: number;
  isLoaded?: boolean;
}

export const getQuestionsFromApiAsync = () => {
  // console.log('getQuestionsFromApiAsync');
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
    this.state = {...iState, ...{x: 0, y: 1, isLoaded: false,}};
    this.onPressAnswerTrue.bind(this);
    this.onPressAnswerFalse.bind(this);
  }

  async componentDidMount() {
    const result = await getQuestionsFromApiAsync();
    if (result) {
      // console.log('qs', result)
      if (result.response_code === 0) {
        RemoveData('questions');
        const questions = result.results;
        const currentQuestion = questions[0]
        const y = questions.length;
        const x = 0;
        this.setState({questions, currentQuestion, x, y, isLoaded: true});
        StoreData('questions', questions);
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
          x: 0,
          y: 1,
          isLoaded: true,
        })
      }
    }
  }

  componentWillUnmount() {
    this.state = null;
  }

  setNewState = (state: IState) => {
    this.state = state;
  }

  nextQuestion() {
    let { questions, x, y } = this.state
    x++;
    if (x === y) {
      // console.log('HRER', x, y, (x === y));
      StoreData('questions', questions);
      navigationService.navigate('ResultsPage', {})
    } else {
      this.setState({
        currentQuestion: questions[x],
        x: x,
      });
    }
  }

  onPressAnswerTrue() {
    // console.log('onPressAnswerTrue', this);
    const { currentQuestion } = this.state
    currentQuestion.given_answer = "True";
    this.nextQuestion();
  }

  onPressAnswerFalse() {
    // console.log('onPressAnswerFalse');
    let { currentQuestion } = this.state
    currentQuestion.given_answer = "False";
    this.nextQuestion();
  }

  render() {
    const {x, y, isLoaded} = this.state;
    let content, category, controls, icon, bgColor;
    if (!isLoaded) {
      category = "Loading...";
      content = (
        <View style={[styles.container, styles.componentContainer, styles.centerAll]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else if (x === y) {
      category = "Calculating Results"
      content = (
        <View style={[styles.container, styles.componentContainer, styles.centerAll]}>
          <Text style={[styles.headerText]}>Getting results.</Text>
        </View>
      );
    }
    else {
      const { questions } = this.state;
      const currQ = questions[x];
      category = currQ.category;
      icon = renderCategoryIcon(category);
      const qText = entities.decode(currQ.question);
      bgColor = IconTypes[category].iconColor;
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
              onPress={() => this.onPressAnswerFalse()}
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
          <View style={[styles.componentContainer]}>
            {icon}
            <Text style={[styles.title, styles.questionTitle]}>
              { category }
            </Text>
          </View>
          <View style={[
            styles.gameBox,
            styles.container,
            styles.centerText,
            {
              padding: 0,
              marginTop:10,
            }]}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0)', bgColor]}
              locations={[1, 0]}
              style={[styles.linearGradientBox, { paddingHorizontal: 20, height: '100%', width: '100%'}]}
            >
            { content }
            { controls }
            </LinearGradient>
          </View>
          <Text style={[styles.callToAction]}>
            {x+1} of {y}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
