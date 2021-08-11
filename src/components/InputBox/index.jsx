import React from "react";
import {StyleSheet} from 'react-native';
import { Input } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function InputBox() {
  return (
    <Input
      placeholder="Class Name"
      style={styles.inputBox}
      inputContainerStyle={{borderBottomWidth: 0}}
    />
  );
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: hp('2%'),
        marginTop: hp('3%'),
    },
})
