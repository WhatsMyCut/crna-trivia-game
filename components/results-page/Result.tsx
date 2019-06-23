import React, { Component } from 'react';
import { AllHtmlEntities as entities } from 'html-entities';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import { IQuestion } from '../../models/IQuestion';
import { Ionicons } from '@expo/vector-icons';
import { Styles } from '../../assets/styles/Styles';
const styles = { ...Styles, ...{

}};


export default class Result extends Component<IQuestion, any> {
  id: number;
  constructor(props: IQuestion, id: number) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.id = id;
  }

  render() {
    const { category, correct_answer, difficulty, given_answer, incorrect_answers, question, type } = this.props
    const qText = entities.decode(question);
    return (
      <View style={[styles.container, styles.result, styles.underline, { minHeight: 50, }]} key={this.id}>
        <Text>Category: {category}</Text>
        <Text>{qText}</Text>
        <Text>You answered: {given_answer}</Text>
        <Text>The correct answer:{correct_answer}</Text>
      </View>
    )
  }
}
