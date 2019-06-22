import React, { Component } from 'react';
import { Styles } from '../../assets/styles/Styles';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const styles = { ...Styles, ...{

}};

export default class GamePage extends Component<IProps, IState> {

render () {
  return (

    <View style={[styles.topNav]}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('AuthLoading', {})}>
        <Ionicons name="ios-arrow-round-back" size={42} color="#ccc" />
      </TouchableOpacity>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.headerText]}>Trivia Challenge</Text>
      </View>
    </View>

    );
  }
}
