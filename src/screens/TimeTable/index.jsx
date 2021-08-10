import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import ClassList from '../../components/ClassList';

const Tab = createMaterialTopTabNavigator();

export default function Days() {
  return (
    <Tab.Navigator backBehaviour="firstRoute" screenOptions={{
        tabBarLabelStyle: { fontSize: hp('1.5%')},
        tabBarItemStyle: { width: wp('40%') },
        tabBarScrollEnabled: true
    }} >
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