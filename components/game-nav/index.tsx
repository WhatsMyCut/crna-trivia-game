import React, { Component } from 'react';
import { Styles } from '../../assets/styles/Styles';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TouchableHighlight,
  Button
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../assets/styles/Colors';
const styles = { ...Styles, ...{

}};

export default class GamePage extends Component<IProps, IState> {
  state = {
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onPressAnswerTrue() {
    this.setModalVisible(!this.state.modalVisible);
  }

  onPressAnswerFalse() {
    this.props.navigation.navigate('AuthLoading', {})
  }

  render () {
    return (

      <View style={[styles.topNav]}>
        <TouchableOpacity
          onPress={() => this.setModalVisible(true)}>
          <FontAwesome5 name="arrow-left" refs={{}} size={32} color="#ccc" />
        </TouchableOpacity>
        <View style={[styles.navHeader]}>
          <Text style={[styles.navHeaderText]}>Trivia Challenge</Text>
        </View>


        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={[styles.modal, {marginTop: 100}]}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{textAlign: 'right'}}><FontAwesome5 name="times-circle" refs={{}} size={22} color="#ccc" /></Text>
              </TouchableHighlight>
              <View >
                <View style={[styles.componentContainer]}>
                  <FontAwesome5 name="exclamation-circle" refs={{}} size={32} color="darkred" />
                  <Text style={[styles.modalText]}>Are you sure you want to quit?</Text>
                </View>
                <Text style={[styles.modalTextSmall]}>All your progress will be lost.</Text>
              </View>

              <View style={[styles.componentContainer]}>
                <View style={[styles.buttonContainerTrue]}>
                  <Button
                    onPress={() => this.onPressAnswerTrue()}
                    title="Contine"
                    color={Colors.white}
                  />
                </View>
                <View style={[styles.buttonContainerFalse]}>
                  <Button
                    onPress={() => this.onPressAnswerFalse()}
                    title="Quit"
                    color={Colors.white}
                  />
                </View>
              </View>

            </View>
          </View>
        </Modal>
      </View>

    );
  }
}
