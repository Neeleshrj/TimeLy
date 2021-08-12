import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function addToStorage(className, slot, type, day, toTime, fromTime, navigation){
    console.log(className)
    console.log(slot)
    console.log(type)
    console.log(day)
    console.log(toTime)
    console.log(fromTime)
    const data = {
        slot: {
            className: className,
            day: day,
            toTime: toTime,
            fromTime: fromTime
        },   
    }
    await AsyncStorage.mergeItem(day, JSON.stringify(data))
    .then(() => {
        console.log('added to async storage');
        Alert.alert(
            'Success!',
            'Class Added Successfully!',
            [
                {
                    text: 'Ok',
                    onPress: ()=> {
                        console.log('clearing values....');
                        navigation.navigate('timetable');
                    }
                }
            ]
        );
    })
    .catch(e => {
        console.log("failed to store..")
        Alert.alert(
            'Failed!',
            e,
            [
                {
                    text: 'Retry',
                    onPress: ()=> console.log('failed...')
                }
            ]
        );
    });
    
} 