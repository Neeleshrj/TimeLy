import React from 'react';
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import ClassList from '../../components/ClassList';

const Tab = createMaterialTopTabNavigator();

export default function Days() {
  return (
    <Tab.Navigator 
        backBehaviour="firstRoute" 
        screenOptions={{
            tabBarLabelStyle: { fontSize: hp('1.75%'), textTransform: 'none', fontWeight: 'bold'},
            tabBarStyle: { shadowColor: 'transparent',shadowRadius: 0, elevation: 0},
            tabBarItemStyle: styles.tabBar,
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: styles.indicator,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#747d8c',
            tabBarPressColor: 'transparent'
    }}
    sceneContainerStyle={{backgroundColor: '#fff'}}
    >
      <Tab.Screen name="Monday" component={ClassList}/>
      <Tab.Screen name="Tuesday" component={ClassList}/>
      <Tab.Screen name="Wednesday" component={ClassList}/>
      <Tab.Screen name="Thursday" component={ClassList}/>
      <Tab.Screen name="Friday" component={ClassList}/>
      <Tab.Screen name="Saturday" component={ClassList}/>
      <Tab.Screen name="Sunday" component={ClassList}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        width: wp('33.33%'),
        
        // backgroundColor: '#fff', 
        // borderRadius: 100, 
        marginVertical: hp('1%'),
        // marginHorizontal: wp('1%')
    },
    indicator: {
        backgroundColor: '#fc5c65',
        height: '70%',
        borderRadius: 100, 
        marginVertical: hp('1%'),
        marginHorizontal: hp('0.5%')
    }
})