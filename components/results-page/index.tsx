import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Button
} from 'react-native';
import { IQuestion } from '../../models/IQuestion';
import Result from './Result';
import GameNav from '../game-nav';
import { RetrieveData } from '../../store/AsyncStore';
import navigationService from '../../navigation/navigationService';
import { Styles } from '../../assets/styles/Styles';
const styles = { ...Styles, ...{

}};

export interface IProps {
  navigation?: any;
};
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

  onPressStartOver() {
    return navigationService.navigate('Game', {});
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
    const percent = Math.floor((correct / numQs) * 100) + '%';
    const results = questions.map((value: IQuestion, index: number) => this.renderQuestion(value, index))
    //console.log('RESULTS: ', results);
    return (
      <ScrollView contentContainerStyle={[{
          paddingTop: 45,
      }]}>
        <GameNav navigation={this.props.navigation} />
        <View style={[styles.resultsContainer]}>
          <View style={[styles.resultsHeader, styles.centerAll]}>
            <Text style={[styles.headerText, styles.centerText]}>
              You Scored
            </Text>
            <Text style={[styles.headerText, styles.centerText]}>
              { correct } / {numQs} or { percent }
            </Text>
          </View>
          <View style={[styles.resultsPanel]}>
            { results }
            <View style={[styles.resultsButtonConainer]}>
              <View style={[styles.buttonContainer]}>
                <Button
                  onPress={() => this.onPressStartOver()}
                  color={"gold"}
                  title="Play Again"
                  accessibilityLabel="Play Again?"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
