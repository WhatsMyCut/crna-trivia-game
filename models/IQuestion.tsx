import React from 'react';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { View, Text } from 'react-native';
import Colors from '../assets/styles/Colors';
import { Styles } from '../assets/styles/Styles';
const styles = { ...Styles, ...{

}};


export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string];
  question: string;
  type: string;
  given_answer?: string;
}

export const IconTypes = {
  "History": {
    iconSet: 'fa',
    iconName: 'history',
    iconColor: 'gold'
  },
  "Entertainment: Board Games":{
    iconSet: 'fa',
    iconName: 'dice-d20',
    iconColor: 'violet'
  },
  "Entertainment: Cartoon & Animations": {
    iconSet: 'fa',
    iconName: 'mask',
    iconColor: 'teal'
  },
  "Entertainment: Comics": {
    iconSet: 'fa',
    iconName: 'journal-whills',
    iconColor: 'teal'
  },
  "Entertainment: Music": {
    iconSet: 'fa',
    iconName: 'compact-disc',
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
  "Entertainment: Japanese Anime & Manga":{
    iconSet: 'fa',
    iconName: 'user-ninja',
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
    iconColor: '#ccc'
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
    iconColor: 'brown'
  },
  "Art": {
    iconSet: 'fa',
    iconName: 'palette',
    iconColor: 'purple'
  },
  "Celebrities": {
    iconSet: 'fa',
    iconName: 'hand-spock',
    iconColor: 'blue'
  },
  "Sports": {
    iconSet: 'fa',
    iconName: 'futbol',
    iconColor: 'green'
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
    iconColor: 'black'
  },
}

export function renderCategoryIcon(category: string): JSX.Element {
  const iconInfo = IconTypes[category];
  console.log('iconInfo', category, iconInfo);
  if (iconInfo) {
    const { iconSet, iconName, iconColor } = iconInfo
    if (iconSet === 'fa') {
      return (
        <View style={[styles.iconContainer, {
          borderRadius: '50%',
          backgroundColor: iconColor,
        }]}
        >
          <Text style={[styles.smallTextShadow, { padding:8, textAlign: 'center', textAlignVertical: 'center' }]}><FontAwesome5 name={iconName} size={22} color={Colors.white}/></Text>
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
