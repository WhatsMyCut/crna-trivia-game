import React, { Component } from 'react';
import { Text, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import {
  SafeAreaView,
  View,
  Button,
} from 'react-native';
import { Styles } from '../../assets/styles/Styles';
//import { StoreConsumer } from '../../store/Store';
//import Home from './Home';
import navigationService from '../../navigation/navigationService';
import {RetrieveData, StoreData} from '../../store/AsyncStore';
import Colors from '../../assets/styles/Colors';
const styles = { ...Styles, ...{

}};
export interface IProps {
  navigation: any;
}

export default class LandingPage extends Component<IProps> {
  constructor(props: IProps) {
    super (props);
  }
  async componentDidMount() {
    this.props.navigation.navigate('AuthLoading');
  }

  onPressBegin(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    // console.log('onPressBegin', ev);
    navigationService.navigate('Game', {});
    // const { navigation } = this.props;
    // navigation.navigate('Game');
  }
  render() {
    return (
      <SafeAreaView style={[styles.container, styles.coverScreen, styles.centerAll]}>
        <View style={[styles.safeArea, styles.container]}>
          <Text style={[styles.title]}>
            Welcome to the Trivia Challenge!
          </Text>
          <Text style={[styles.welcome, styles.container, styles.centerText, { paddingHorizontal: 20, }]}>
            You will be presented with 10 True or False questions.
          </Text>
          <Text style={[styles.callToAction]}>
            Can you score 100%?
          </Text>
          <View style={[styles.buttonContainer]}>
            <Button
              onPress={this.onPressBegin}
              title="Begin"
              color={Colors.white}
              accessibilityLabel="Begin the Trivia Challenge"/>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
