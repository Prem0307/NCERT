
import React from 'react';
import {  Text, View } from 'react-native';
import science from './Screens/ScienceScreen';
import maths from './Screens/MathsScreen';
import DrawerNavigator from './Navigation/DrawerNavigator'
import {NavigationContainer} from  '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
  );
}



 
       

