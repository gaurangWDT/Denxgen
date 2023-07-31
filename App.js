// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import OnBoarding from './Screen/OnBoarding';
// import OnBoardingPhone from './Screen/OnBoardingPhone';
// import Navigation from './Navigation';
// import SplashScreen from './Screen/SplashScreen';
// import WalkThrough from './Screen/WalkThrough';
// import GetStarted from './Screen/GetStarted';
// import SelectProfession from './Screen/SelectProfession';
// import CompleteProfile1 from './Screen/CompleteProfile1';
// import CompleteProfile2 from './Screen/CompleteProfile2';
// import CompleteProfile3 from './Screen/CompleteProfile3';

// const App = () => {
//   return <CompleteProfile3 />;
// };

// export default App;

// const styles = StyleSheet.create({});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from './Screen/OnBoarding';
import SplashScreen from './Screen/SplashScreen';
import WalkThrough from './Screen/WalkThrough';
import OnBoardingPhone from './Screen/OnBoardingPhone';
import GetStarted from './Screen/GetStarted';
import SelectProfession from './Screen/SelectProfession';
import CompleteProfile1 from './Screen/CompleteProfile1';
import CompleteProfile2 from './Screen/CompleteProfile2';
import CompleteProfile3 from './Screen/CompleteProfile3';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="OnBoardingPhone" component={OnBoardingPhone} />
        <Stack.Screen name="WalkThrough" component={WalkThrough} />
        <Stack.Screen name="SelectProfession" component={SelectProfession} />
        <Stack.Screen name="CompleteProfile1" component={CompleteProfile1} />
        <Stack.Screen name="CompleteProfile2" component={CompleteProfile2} />
        <Stack.Screen name="CompleteProfile3" component={CompleteProfile3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
