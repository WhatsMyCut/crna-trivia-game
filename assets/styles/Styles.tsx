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
    flex: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  safeArea: {
    flex: 1,
    width: SAFE_WIDTH,
    height: CARD_HEIGHT,
    padding: 20,
  },

  blackBG: {
    backgroundColor: Colors.black,
    color: Colors.white
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

  headerText: {
    color: Colors.black,
    fontSize: moderateScale(24),
    fontFamily: 'Proxima Nova Bold',
    textAlign: 'center',
    width: '80%',
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
    flex: 1,
    alignItems: 'flex-start',
    textAlign: 'left',
    top: -15,
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
    paddingHorizontal: 10,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1
    },
  },

  buttonContainerFalse: {
    backgroundColor: 'darkred',
    minWidth: 130,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1
    },
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
    height: SCREEN_HEIGHT - 50,
  },
  error: {
    color: 'red',
    marginHorizontal: 20,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    padding: 4,
    marginRight: 10,
    borderWidth: 2,
    borderColor: Colors.lightGray,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1
    },
  },

  // Modal
  modal:{
    alignSelf: 'center',
    width: SAFE_WIDTH,
    padding: defaults.padding,
    borderRadius: defaults.borderRadius,
    backgroundColor: Colors.white,
    borderColor: Colors.mediumGray,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 1
    },
  },

  modalText: {
    padding: 15,
    color: Colors.black,
    fontSize: moderateScale(20),
    fontFamily: 'Proxima Nova Bold',
  },

  modalTextSmall: {
    padding: 15,
    color: Colors.black,
    fontSize: moderateScale(14),
    fontFamily: 'Proxima Nova Bold',
  },


  // Game Page
  navHeader: {
    flex: 1,
    flexBasis: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    top: -15,
  },
  navHeaderText: {
    flex: 1,
    color: Colors.black,
    fontSize: moderateScale(24),
    fontFamily: 'Proxima Nova Bold',
    textAlign: 'center',
    width: '80%',
    minHeight: 50,
  },
  gameBox: {
    flex: 1,
    minHeight: CARD_HEIGHT / 2,
    width: CARD_WIDTH,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderRadius: defaults.borderRadius,
    fontSize: moderateScale(22),
    padding: 20,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  // Results Page
  resultsNav: {
    flex: 1,
    position: 'relative',
    top: 35,
    marginTop: 45,
    width: '100%',
  },
  resultsContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  resultsHeader: {
    flex: 1,
    flexShrink: 0,
    flexGrow: 1,
    flexDirection: 'column',
    textAlign: 'center',
    maxHeight: 100,
  },
  resultsPanel: {
    flex: 1,
    textAlign: 'left',
    marginTop: 15,
    minHeight: 1,
  },
  result: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
    paddingVertical: 10,
    borderRadius: defaults.borderRadius,
    marginBottom: 8,
    padding: 10,
    minHeight: 120,
    shadowColor: Colors.black,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  resultIcon: {
    flex: 1,
    flexBasis: '20%'
  },
  resultQuestionContainer: {
   flex: 1,
   flexBasis: '80%',
   paddingTop: 5,
  },
  resultTextContainer: {
    flex: 1,
    textAlign: 'left',
    width: '100%',
    minHeight: 1,
    marginTop: 5,
  },
  resultCategoryContainer: {
    flex: 0,
    height: 22,
    fontWeight: 'bold',
    fontSize: moderateScale(14)
  },
  resultCategoryTextSmall: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    fontWeight: 'normal',
    fontFamily: 'Proxima Nova',
    fontSize: moderateScale(18),
  },
  resultText: {
    flex: 1,
    fontWeight: 'normal',
    fontFamily: 'Proxima Nova Bold',
    fontSize: moderateScale(22),
  },
  resultTextSmall: {
    flex: 1,
    fontWeight: '400',
    fontFamily: 'Proxima Nova',
    fontSize: moderateScale(12),
  },
  resultsButtonConainer: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
  },
  // Layout helpers
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
    borderBottomColor: Colors.mediumGray,
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
});
