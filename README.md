# code-challenge-mike-taylor

This is a code challenge for the G2i Group written by Mike Taylor on 6/21 - 6/24/2019

## Quick Start

See [Prerequisites](#Prerequisites) below for prerequistie package details.

```
git clone https://github.com/g2i/code-challenge-mike-taylor.git
cd code-challenge-mike-taylor
npm i
npm start
open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
```

Launch [http://localhost:19002/](http://localhost:19002/) and press "Run on iOS Simulator" on the left navigation menu.

## Basic Framework

This was created using the `create-react-native` which is now `expo init`.

For more information, visit the [Expo](http://expo.io) website.

## Developer Notes

The codebase utilizes techniques and best practices I have been using most recently, and over the course of my career.

The `LandingPage` wireframe asks, 'Can you score 100%' but the `ResultsPage` wireframe only showed `[Correct] / [Total]`, so a percentage was added to display `[Correct] / [Total] [Percentage]%`

While experimenting, it was discovered the API will take `easy | medium | hard` for the difficulty passed in the query. Things to improve: add slider to set difficulty level.

The total hours for this project:
- Friday 6/21: 8hrs - Initial app and component creation plus navigation workflow
- Saturday 6/22: 2hrs - Game logic and state management
- Sunday 6/23: 10hrs - UI Styling, Modal, Icons, Fonts, Gradients
- Monday 6/24: 2 hrs - Documentation

### Local Data Store

The codebase uses the `AsyncStorage` class from the `react-native` library. Data is only retrived from the API server once per game, and is held in local storage for navigating between the `GamePage` and `ResultsPage` with the `given_answer` property value set in the `GamePage` state.

### App Navigator

The codebase uses the `react-native` library, and the `createSwitchNavigator` specifically, as opposed to the `createStackNavigator`, based on the specifications.

### Typescript

The codebase was created using the `blank (TypeScript)` option in `crete-react-native-app@2.20.2`

### Global Styling

Rather than using individual component styles, the codebase uses a "global styling" technique that allows multiple classnames in an array passed to the style attribute of the react native elements, plus allows for inline style overrides similar to web CSS.

For example, the following will apply a pre-defined style from the imported global `Styles`, the defined style `myCompenent` from the component itself, and finally an inline `fontSize` override:

```
import Styles from '../assets/styles/Styles';
const styles = {...Styles, ...{
  myComponent: {
    fontSize: 12,
  }
}}
render() {
  return (
    <View style={[styles.container, styles.myComponent, { fontSize: 22 }]}>
    ...
    </View>
  );
}
```

#### FlexBox

The code layout uses "FlexBox" CSS3 styling extensively along with the `ScrollView` class.

#### Custom Local Fonts

The code ustilizes custom fonts `ProximaNova` and `ProximaNovaBold` located in the `/assets/fonts/` directory and are loaded with the `expo-font` library.

#### FontAwesome5 Icons

The code utilizes the latest `FontAwesome5` react native icons from the `@expo/vector-icons` library.

### Modal Layer

The `Modal` component was added to the `GameNav` class to handle displaying and handling events for when the user presses the 'back' arrow at the top of the screen while playing the game or viewing the results.

Things to look for are the custom icons for `Close` and `Alert` elements.

Things for improvement: add an opaque overlay in the transparent area.

### Apollo support for Orientation switching

Apollo support has been added to handle orientation switching between landscape and portrait views.

Things to improve: in it's current state, the modal will only display in portrait mode regardless of device orientation.

### ErrorBoundary wrapper

The ErrorBoundary is a best practice class for debugging sub-views, and will print 'Something went wrong.' in the center of the screen.

### Authorization Placeholder

The project includes a placeholder for Authorization / login support

## Prerequisutes

[Node](), [Expo CLI]()
