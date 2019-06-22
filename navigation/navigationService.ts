import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  // console.log('setTopLevelNavigator', navigatorRef)
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  // console.log('HERER', routeName, params);
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator
};
