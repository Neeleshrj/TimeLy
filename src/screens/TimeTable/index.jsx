import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import ClassList from '../../components/ClassList';

const Tab = createMaterialTopTabNavigator();

export default function Days() {
  const [currentDay, setCurrentDay] = React.useState("");

  useEffect(()=>{
    var n =  new Date().getDay();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    setCurrentDay(days[n]);
  },[])

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
      initialRouteName={currentDay}
    >
      <Tab.Screen name="Monday" children={()=> <ClassList name="Monday" />}/>
      <Tab.Screen name="Tuesday" children={()=> <ClassList name="Tuesday" />}/>
      <Tab.Screen name="Wednesday" children={()=> <ClassList name="Wednesday" />}/>
      <Tab.Screen name="Thursday" children={()=> <ClassList name="Thursday" />}/>
      <Tab.Screen name="Friday" children={()=> <ClassList name="Friday" />}/>
      <Tab.Screen name="Saturday" children={()=> <ClassList name="Saturday" />}/>
      <Tab.Screen name="Sunday" children={()=> <ClassList name="Sunday" />}/>
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