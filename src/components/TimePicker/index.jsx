import React,{useEffect, useState} from "react";
import { StyleSheet, View, Text, Platform, Appearance } from "react-native";
import { Button } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function msToHuman(ms) {
  let hours = ms.getHours();
  let min = ms.getMinutes();
  if(hours < 10)
    hours = "0" + hours;
  if(min < 10)
    min = "0" + min;
  return hours + ":" + min;
}

export default function DatePicker({ label, time, setTime }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [darkmode, setDarkMode] = useState(false);

  useEffect(()=> {
      if(Platform.OS == "ios"){
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
    // console.log("A time has been picked: ", time);
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
        minuteInterval={5}
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
