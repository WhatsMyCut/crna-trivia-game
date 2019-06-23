import React, { Component } from 'react';
import { Styles } from '../../assets/styles/Styles';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const styles = { ...Styles, ...{

}};

export default class ResultsPage extends Component<IProps, IState> {

render () {
  return (
    <SafeAreaView style={[styles.container, styles.coverScreen, styles.centerAll]}>
      <View style={[styles.topNav]}>
        <View style={[styles.headerContainer]}>
          <Text style={[styles.headerText]}>Trivia Challenge</Text>
        </View>
      </View>
    </SafeAreaView>

    );
  }
}
