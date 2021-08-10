import React from 'react';
import { TouchableOpacity,Alert  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import TimeTable from '../screens/TimeTable';


const Stack = createNativeStackNavigator();

export default function RootNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Time Table" component={TimeTable} options={({navigation}) => ({
                headerRight: ()=> (
                    <>
                        <TouchableOpacity onPress={() => {Alert.alert('Add class')}}>
                            <Icon name="add-outline" type="ionicon" color="#000" size={hp('4%')} />
                        </TouchableOpacity>
                    </>
                )
            })}/>
        </Stack.Navigator>
    );
}