import React, { Component } from 'react';
import { AllHtmlEntities as entities } from 'html-entities';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import { IQuestion, renderCategoryIcon } from '../../models/IQuestion';
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
    const icon = renderCategoryIcon(category);
    const bgColor = (correct_answer === given_answer) ? '#d9f9d9' : '#f7d9d9';
    return (
      <View style={[styles.result, { backgroundColor: bgColor}]} key={this.id}>
        <View style={[styles.resultCategoryContainer]}>
          <Text style={[styles.resultCategoryTextSmall]}>{category}</Text>
        </View>
        <View style={[styles.componentContainer, {flex: 1,}]}>
          <View style={[styles.resultIcon]} >{ icon }</View>
          <View style={[styles.resultQuestionContainer]}>
            <Text style={[styles.resultText]}>{qText}</Text>
          </View>
        </View>
        { (correct_answer === given_answer) &&
          <View style={[styles.resultTextContainer]}>
            <View style={[styles.container]}><Text style={[styles.resultTextSmall]}>You answered: {given_answer}</Text></View>
            <View style={[styles.container]}><Text style={[styles.resultTextSmall]}>Correct!</Text></View>
          </View>
        }
        { (correct_answer !== given_answer) &&
          <View style={[styles.resultTextContainer]}>
            <View style={[styles.container]}><Text style={[styles.resultTextSmall]}>You answered: {given_answer}</Text></View>
            <View style={[styles.container]}><Text style={[styles.resultTextSmall]}>The correct answer: {correct_answer}</Text></View>
          </View>
        }
      </View>
    )
  }

}
