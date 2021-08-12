import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getClassList(){
    try{
        return await AsyncStorage.getItem('Monday')
        // console.log(values);
    }catch(e){
        console.log(e);
    }
}