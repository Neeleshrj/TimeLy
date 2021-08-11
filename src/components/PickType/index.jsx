import React from "react";
import {View, StyleSheet} from 'react-native';
import { Button, Overlay } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function PickType({ value, onChange, option1, option2 }) {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <>
      <Button title={value} type="outline" onPress={() => setVisible(true)} buttonStyle={styles.btn} titleStyle={{color: '#fff'}}/>
      <Overlay isVisible={visible} onBackdropPress={() => toggleOverlay()} overlayStyle={styles.overlay}>
        <Button title="Done" type="clear" onPress={() => toggleOverlay()} buttonStyle={styles.btn} titleStyle={{color: '#fc5c65'}}/>
        <Picker selectedValue={value} onValueChange={onChange} mode="dropdown">
          <Picker.Item label={option1} value={option1} />
          <Picker.Item label={option2} value={option2} />
        </Picker>
      </Overlay>
    </>
  );
}


const styles = StyleSheet.create({
  btn: {
    borderColor: 'transparent',
    // backgroundColor: '#f1f2f6'
  },
  overlay: {
    width: widthPercentageToDP('50%')
  }
})