import React, { useEffect} from "react";
import { View, StyleSheet } from "react-native";
import { Button, Overlay } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import CircleButton from "../CircleButton";

export default function ColorPicker({
  visible,
  toggleOverlay,
  color,
  changeColor,
}) {
  const [newcolor, setNewColor] = React.useState(color);

  useEffect(() => {
      changeColor(newcolor)
  },[newcolor])  

  return (
    <>
      <Button
        icon={
          <Icon
            name="tint"
            size={15}
            color="white"
            style={{ padding: hp("1%") }}
          />
        }
        iconRight={true}
        title="Color"
        containerStyle={styles.colorButtonContainer}
        buttonStyle={{ backgroundColor: color }}
        onPress={toggleOverlay}
      />
      <Overlay isVisible={visible} onBackdropPress={() => {changeColor(newcolor);toggleOverlay()}}>
        <View style={styles.container}>
          <CircleButton color="#feca57" onPress={() => {setNewColor("#feca57");toggleOverlay()}} />
          <CircleButton color="#ff9f43" onPress={() => {setNewColor("#ff9f43");toggleOverlay()}} />
          <CircleButton color="#1dd1a1" onPress={() => {setNewColor("#1dd1a1");toggleOverlay()}} />
          <CircleButton color="#576574" onPress={() => {setNewColor("#576574");toggleOverlay()}} />
        </View>
        <View style={styles.container}>
          <CircleButton color="#5f27cd" onPress={() => {setNewColor("#5f27cd");toggleOverlay()}} />
          <CircleButton color="#00d2d3" onPress={() => {setNewColor("#00d2d3");toggleOverlay()}} />
          <CircleButton color="#ff7675" onPress={() => {setNewColor("#ff7675");toggleOverlay()}} />
          <CircleButton color="#0984e3" onPress={() => {setNewColor("#0984e3");toggleOverlay()}} />
        </View>
        <View style={styles.container}>
          <CircleButton color="#1e90ff" onPress={() => {setNewColor("#1e90ff");toggleOverlay()}} />
          <CircleButton color="#2ed573" onPress={() => {setNewColor("#2ed573");toggleOverlay()}} />
          <CircleButton color="#57606f" onPress={() => {setNewColor("#57606f");toggleOverlay()}} />
          <CircleButton color="#2f3542" onPress={() => {setNewColor("#2f3542");toggleOverlay()}} />
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  colorButtonContainer: {
    marginTop: hp("3.5%"),
    marginHorizontal: wp("3%"),
    flex: 1,
  },
  container: {
    flexDirection: "row",
  },
});
