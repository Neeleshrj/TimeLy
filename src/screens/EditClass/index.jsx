import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import PickType from "../../components/PickType";
import TimePicker from "../../components/TimePicker";
import ColorPicker from "../../components/ColorPicker";

import { addToStorage, removeFromStorage } from "./helper";

export default function EditClass({ navigation, route }) {
  const { Uid, From, To, Subname, Type, Slot, Color, Day } = route.params;
  const [className, setClass] = useState(Subname);
  const [slot, setSlot] = useState(Slot);
  const [type, setType] = useState(Type);
  const [day, setDay] = useState(Day);
  const [fromTime, setFromTime] = useState(new Date(From));
  const [toTime, setToTime] = useState(new Date(To));
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(Color);
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text="Edit" />
      </View>
      <View style={styles.inputForm}>
        <InputBox
          value={className}
          onChangeText={(className) => {
            setClass(className);
          }}
          placeholder="Class Name"
        />
        <InputBox
          value={slot}
          onChangeText={(slot) => {
            setSlot(slot);
          }}
          placeholder="Slot (E.g. - A1,B1)"
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.picker}>
            <PickType
              value={type}
              onChange={(type) => setType(type)}
              options="2"
              option1="Theory"
              option2="Lab"
            />
          </View>
          <View style={styles.picker}>
            <PickType
              value={day}
              onChange={(day) => setDay(day)}
              options="7"
              option1="Monday"
              option2="Tuesday"
              option3="Wednesday"
              option4="Thursday"
              option5="Friday"
              option6="Saturday"
              option7="Sunday"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.timePicker}>
            <TimePicker
              label="From"
              time={fromTime}
              setTime={(fromTime) => setFromTime(fromTime)}
            />
          </View>
          <View style={styles.timePicker}>
            <TimePicker
              label="To"
              time={toTime}
              setTime={(toTime) => setToTime(toTime)}
            />
          </View>
        </View>
        <ColorPicker visible={visible} toggleOverlay={toggleOverlay} color={color} changeColor={(color) => setColor(color)} />
        <View style={{ flexDirection: "row" }}>
          <Button
            icon={
              <Icon
                name="save"
                size={15}
                color="white"
                style={{ padding: hp("1%") }}
              />
            }
            iconRight={true}
            title="Save"
            containerStyle={styles.addButtonContainer}
            buttonStyle={styles.addButton}
            loading={loading}
            onPress={() => {
              setLoading(true);
              addToStorage(
                Uid,
                className,
                slot,
                type,
                day,
                toTime,
                fromTime,
                Day,
                color,
                navigation
              );
              setLoading(false);
            }}
          />
          <Button
            icon={
              <Icon
                name="trash"
                size={15}
                color="white"
                style={{ padding: hp("1%") }}
              />
            }
            iconRight={true}
            title="Delete"
            containerStyle={styles.addButtonContainer}
            buttonStyle={styles.removeButton}
            loading={loading}
            onPress={() => {
              setLoading(true);
              Alert.alert(
                  'Caution!',
                  'Are you sure you want to delete this class?',
                  [
                      {
                          text: 'Yes',
                          onPress: ()=> removeFromStorage(Uid, navigation, Day, 1)
                      },
                      {
                          text: 'Cancel',
                          styles: 'cancel',
                          onPress: ()=> console.log('canceled...')
                      }
                  ]
              )
              setLoading(false);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  headerContainer: {
    marginTop: hp("2%"),
    marginHorizontal: wp("5%"),
  },
  inputForm: {
    marginHorizontal: wp("2%"),
  },
  picker: {
    flex: 1,
    backgroundColor: "#2c3e50",
    marginHorizontal: wp("3%"),
    borderRadius: 20,
    marginBottom: hp("2%"),
  },
  timePicker: {
    flex: 1,
    marginHorizontal: wp("3%"),
  },
  addButtonContainer: {
    marginTop: hp("3.5%"),
    marginHorizontal: wp("3%"),
    flex: 1
  },
  addButton: {
    backgroundColor: "#3498db",
    flex: 1
  },
  removeButton: {
    backgroundColor: "#ee5253",
  },
});
