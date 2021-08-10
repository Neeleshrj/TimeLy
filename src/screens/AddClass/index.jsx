import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


import Header from "../../components/header";
import InputBox from "../../components/InputBox";
import PickType from "../../components/PickType";

export default function AddClass() {
  const [type, setType] = useState("Theory");
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text="Add" />
        <Header text="New Class" />
      </View>
      <View style={styles.inputForm}>
        <InputBox />
        <View style={styles.picker}>
            <PickType value={type} onChange={(type)=> setType(type)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  headerContainer: {
    // backgroundColor: 'red',
    // flex: 1,
    marginVertical: hp("2%"),
    marginHorizontal: wp("5%"),
  },
  inputForm: {
    // flex: 1,
    backgroundColor: "#fc5c65",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  picker: {
    backgroundColor: "#fff",
    marginHorizontal: wp("3%"),
    borderRadius: 20,
    // padding: hp('2%'),
    marginBottom: hp("2%"),
  },
});
