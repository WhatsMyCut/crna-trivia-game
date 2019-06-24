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
    return (
      <View style={[styles.result, styles.underline]} key={this.id}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          { icon }
          <View style={[styles.resultTextContainer]}>
            <Text style={[styles.resultText]}>{category}</Text>
          </View>
        </View>
        <Text>{qText}</Text>
        <Text>You answered: {given_answer}</Text>
        <Text>The correct answer:{correct_answer}</Text>
      </View>
    )
  }
}
