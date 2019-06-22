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
import {RetrieveData, StoreData} from '../../store/AsyncStore';
import Colors from '../../assets/styles/Colors';
const styles = { ...Styles, ...{

}};
export interface IProps {
  navigation: any;
}

export interface IState {
  questions: any;
  x: number;
  y: number;
  isLoaded: boolean;
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
    this.state = {...iState, ...{x: 1, y: 1, isLoaded: false,}};
  }

  async componentDidMount() {
    const result = await getQuestionsFromApiAsync();
    if (result) {
      console.log('qs', result)
      if (result.response_code === 0) {
        const questions = result.results;
        const y = questions.length;
        this.setState({questions, y, isLoaded: true});
      } else {
        this.setState({
          questions: [{
            "category": "Error",
            "question": "Sorry there was a network error.",
            "type": null,
          }],
          y: 1,
          isLoaded: true,
        })
      }
    }
  }


  onPressBegin(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    // console.log('onPressBegin', ev);
    navigationService.navigate('Game', {});
    // const { navigation } = this.props;
    // navigation.navigate('Game');
  }
  onPressAnswerTrue() {
    console.log('onPressAnswerTrue');
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
              onPress={this.onPressAnswerTrue}
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
            {x - 1} of {y}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
