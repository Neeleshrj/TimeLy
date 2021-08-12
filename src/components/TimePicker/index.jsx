import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, Platform, Appearance } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { widthPercentageToDP } from "react-native-responsive-screen";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function msToHuman(ms) {
  let hours = ms.getHours();
  let min = ms.getMinutes();

  return hours + ":" + min;
}

export default function DatePicker({ label, time, setTime }) {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [darkmode, setDarkMode] = React.useState(false);

  useEffect(()=> {
      if(Platform.OS == "ios"){
          console.log(Appearance.getColorScheme())
          if(Appearance.getColorScheme() === 'dark')
            setDarkMode(true);
      }
  },[isDatePickerVisible])

  var timeFormatted = msToHuman(time);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    console.log("A time has been picked: ", time);
    hideDatePicker();
    setTime(time);
  };

  return (
    <View>
      <View>
        <Text>{label}</Text>
      </View>
      <Button title={timeFormatted} onPress={showDatePicker} buttonStyle={styles.btn} titleStyle={styles.time}/>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={time}
        isDarkModeEnabled={darkmode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderColor: "transparent",
    backgroundColor: '#2c3e50',
    borderRadius: 20
  },
  time: {
      color: '#fff'
  },
});
