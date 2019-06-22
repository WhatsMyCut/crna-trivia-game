import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Layout from './Layout';
import Colors from './Colors';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const width = Layout.window.width;
const height = Layout.window.height;

const defaults = {
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    margin: 20,
    padding: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    primaryHeight: height,
    safeWidth: null,
    fullWidth: null,
    hairline: StyleSheet.hairlineWidth
}
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SAFE_WIDTH = width - 2 * defaults.marginHorizontal;
export const CARD_WIDTH = width * 0.87;
export const CARD_HEIGHT = height * 0.65;
defaults.safeWidth = SAFE_WIDTH;
defaults.fullWidth = SCREEN_WIDTH;

export const Styles = ScaledSheet.create({
  // Main shared styles
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  safeArea: {
    width: SAFE_WIDTH,
    height: '100%',
    margin: 20,
  },

  blackBG: {
    backgroundColor: Colors.black,
    color: Colors.white
  },

  title: {
    flex: 1,
    fontFamily: 'Proxima Nova Bold',
    fontSize: moderateScale(28),
    color: Colors.black,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 25,
    height: 'auto',
  },


  questionTitle: {
  },

  welcome: {
    flex: 1,
    fontFamily: 'Proxima Nova',
    fontSize: moderateScale(24),
    color: Colors.mediumGray,
    fontWeight: 'normal',
    paddingBottom: 10,
    paddingTop: 10,
  },

  callToAction: {
    flex: 1,
    fontFamily: 'Proxima Nova Bold',
    fontSize: moderateScale(24),
    color: Colors.darkGray,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10,
  },

  buttonContainer: {
    backgroundColor: '#841584',
    minWidth: 130,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10
  },

  buttonContainerTrue: {
    backgroundColor: 'green',
    minWidth: 130,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10
  },

  buttonContainerFalse: {
    backgroundColor: 'darkred',
    minWidth: 130,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10
  },

  coverScreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  coverAll: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  error: {
    color: 'red',
    marginHorizontal: 20,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Game Cards
  gameBox: {
    minHeight: CARD_HEIGHT,
    height: 'auto',
    width: CARD_WIDTH,
    borderColor: Colors.tintColor,
    borderWidth: 1,
    borderRadius: defaults.borderRadius,
    fontSize: moderateScale(22),
    padding: 20
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    position: "absolute",
    padding: 0,
    top: 0,
    left: 0,
    borderRadius: defaults.borderRadius,
    backgroundColor: Colors.white
  },
  cardHeaderText: {
    color: Colors.white,
    height: 30,
    width: 200,
    textAlign: 'left',
    marginVertical: 20,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  cardPlaceholderText: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Bold',
    color: Colors.lightGray,
  },
  indexGradient: {
    position: 'absolute',
    borderRadius: defaults.borderRadius,
    width: CARD_WIDTH,
  },
  cardImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: defaults.borderRadius
  },
  badgeImage: {
    flex: 1,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 10
  },
  // Info Views
  greyCard: {
    flex: 1,
    backgroundColor: Colors.darkGray,
  },
  greyCardHeader: {
    backgroundColor: Colors.darkGray,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  containerGrey: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGray,
  },
  containerTitle: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: moderateScale(24),
    fontVariant: [ 'small-caps' ],
    marginBottom: 15,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    height: 80,
    width: '100%',
  },
  headerText: {
    color: Colors.black,
    fontSize: moderateScale(24),
    fontFamily: 'Proxima Nova Bold',
    textAlign: 'center',
    width: '80%',
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  underline: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.white,
  },
  padded: {
    padding: defaults.padding
  },
  smallTextShadow: {
    textShadowColor: Colors.black,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
  gradientContainer: {
    position: 'absolute',
    borderRadius: defaults.borderRadius,
    left: 0,
    top: 0,
  },
  linearGradientBox: {
    flex: 1,
    borderRadius: defaults.borderRadius,
    elevation: 1,
    marginVertical: 5,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  componentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

  },
  topNav: {
    flex: 1,
    justifyContent: 'space-between',
    maxHeight: 50,
    paddingHorizontal: defaults.paddingHorizontal,
    zIndex:1,
    width: '100%',
    color: Colors.black,
  },
  swipeButton: {
    padding: 20,
    marginHorizontal: 14,
    borderRadius: 50,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
       width: 0,
       height: 0
    },
    backgroundColor: "white"
   },
   phoneInputContainer: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    width: '100%',
  },
  textInput: {
    color: Colors.white,
    fontSize: moderateScale(18),
    width: 200,
    textAlign: 'center',
    borderColor: Colors.mediumGray,
    borderBottomWidth: 1,
  },
  videoPlayIcon: {
    position: 'absolute',
    opacity: 0.8,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
