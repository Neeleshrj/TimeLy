import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import PickType from "../../components/PickType";
import AddSlot from "../../components/AddSlot";

export default function AddClass() {
  const [type, setType] = useState("Theory");
  const [slot, setSlot] = useState("Morning");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text="Add" />
        <Header text="New Class" />
      </View>
      <View style={styles.inputForm}>
        <InputBox />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.picker}>
            <PickType
              value={type}
              onChange={(type) => setType(type)}
              option1="Theory"
              option2="Lab"
            />
          </View>
          <View style={styles.picker}>
            <PickType
              value={slot}
              onChange={(slot) => setSlot(slot)}
              option1="Morning"
              option2="Afternoon"
            />
          </View>
        </View>

        <AddSlot type={type} slot={slot} />
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Add"
          containerStyle={styles.addButtonContainer}
          buttonStyle={styles.addButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  headerContainer: {
    // backgroundColor: 'red',
    // flex: 1,
    marginTop: hp("2%"),
    marginHorizontal: wp("5%"),
  },
  inputForm: {
    // flex: 1,
    marginHorizontal: wp("2%"),
  },
  picker: {
    flex: 1,
    backgroundColor: "#353b48",
    marginHorizontal: wp("3%"),
    borderRadius: 20,
    marginBottom: hp("2%"),
  },
  addButtonContainer: {
    // borderRadius: 20,
    marginTop: hp("3.5%"),
  },
  addButton: {
    backgroundColor: "#3498db",
  },
});
