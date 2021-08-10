import React from 'react';
import { TouchableOpacity,Alert  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import TimeTable from '../screens/TimeTable';
import AddClass from '../screens/AddClass';

const Stack = createNativeStackNavigator();

export default function RootNav(){
    return(
        <Stack.Navigator 
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#fc5c65'},
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="timetable" component={TimeTable} options={({navigation}) => ({
                headerTitle: 'Time Table',
                headerRight: ()=> (
                    <>
                        <TouchableOpacity onPress={() => navigation.navigate('addclass')}>
                            <Icon name="add-outline" type="ionicon" color="#fff" size={hp('4%')} />
                        </TouchableOpacity>
                    </>
                )
            })}/>
            <Stack.Screen name="addclass" component={AddClass} options={() => ({ headerTitle: 'Add Class'})}/>
        </Stack.Navigator>
    );
}