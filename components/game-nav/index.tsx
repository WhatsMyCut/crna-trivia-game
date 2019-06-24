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
import { Ionicons } from '@expo/vector-icons';
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
          <Ionicons name="ios-arrow-round-back" refs={{}} size={42} color="#ccc" />
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
                <Text style={{textAlign: 'right'}}>Close</Text>
              </TouchableHighlight>
              <View >
                <Text style={[styles.modalText]}>Are you sure you want to quit?</Text>
                <Text style={[styles.modalTextSmall]}>All your progres will be lost.</Text>
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
