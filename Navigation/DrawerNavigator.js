import React from 'react';
import { Text,View ,Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Logout" />
        </Drawer.Navigator>
    )
}