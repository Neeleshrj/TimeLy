import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function CircleButton({color, onPress}){
    return(
        <Button
            buttonStyle={[{backgroundColor: color},styles.button]}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 40,
        height: heightPercentageToDP('8%'),
        width: heightPercentageToDP('8%'),
        marginVertical: heightPercentageToDP('1%'),
        marginHorizontal: widthPercentageToDP('2%')
    }
})