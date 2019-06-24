import React from 'react';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { View, Text } from 'react-native';
import Colors from '../assets/styles/Colors';

export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
  given_answer?: string;
}

const IconTypes = {
  "History": {
    iconSet: 'fa',
    iconName: 'history',
    iconColor: 'pink'
  },
  "Entertainment: Comics": {
    iconSet: 'fa',
    iconName: 'journal-whills',
    iconColor: 'teal'
  },
  "Entertainment: Music": {
    iconSet: 'fa',
    iconName: 'guitar',
    iconColor: 'lightblue'
  },
  "Entertainment: Film": {
    iconSet: 'fa',
    iconName: 'film',
    iconColor: 'gold'
  },
  "Entertainment: Japanese": {
    iconSet: 'fa',
    iconName: 'yen-sign',
    iconColor: 'red'
  },
  "Entertainment: Video Games": {
    iconSet: 'fa',
    iconName: 'gamepad',
    iconColor: 'teal'
  },
  "Entertainment: Television": {
    iconSet: 'fa',
    iconName: 'tv',
    iconColor: 'brown'
  },
  "Science: Computers": {
    iconSet: 'fa',
    iconName: 'laptop-code',
    iconColor: 'lightgrey'
  },
  "Science: Gadgets": {
    iconSet: 'fa',
    iconName: 'robot',
    iconColor: 'darkgrey'
  },
  "Science: Mathematics": {
    iconSet: 'fa',
    iconName: 'square-root-alt',
    iconColor: 'lightgreen'
  },
  "Science & Nature": {
    iconSet: 'fa',
    iconName: 'microscope',
    iconColor: 'salmon'
  },
  "Animals": {
    iconSet: 'fa',
    iconName: 'paw',
    iconColor: 'lightbrown'
  },
  "Art": {
    iconSet: 'fa',
    iconName: 'palette',
    iconColor: 'lightbrown'
  },
  "Sports": {
    iconSet: 'fa',
    iconName: 'futbol',
    iconColor: 'chartreusse'
  },
  "Mythology": {
    iconSet: 'fa',
    iconName: 'dragon',
    iconColor: 'red'
  },
  "Geography": {
    iconSet: 'fa',
    iconName: 'globe-europe',
    iconColor: 'blue'
  },
  "General Knowledge": {
    iconSet: 'fa',
    iconName: 'brain',
    iconColor: 'pink'
  },
  "Politics": {
    iconSet: 'fa',
    iconName: 'person-booth',
    iconColor: 'orange'
  },
  "Vehicles": {
    iconSet: 'fa',
    iconName: 'car',
    iconColor: 'red'
  },
}

export function renderCategoryIcon(category: string): JSX.Element {
  const iconInfo = IconTypes[category];
  console.log('iconInfo', iconInfo);
  if (iconInfo) {
    const { iconSet, iconName, iconColor } = iconInfo
    if (iconSet === 'fa') {
      return (
        <View style={{
          backgroundColor: iconColor,
          borderRadius: '50%',
          height: 50,
          width: 50,
          padding: 3,
          marginRight: 10,
        }}
        >
          <Text style={{ padding:8 }}><FontAwesome5 name={iconName} size={22} color={Colors.white}/></Text>
        </View>
      );
    }
  } else {
    return (
      <View >
        ?
      </View>
    )
  }
}
