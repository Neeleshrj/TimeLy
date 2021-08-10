import React from "react";
import {View} from 'react-native';
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

export default function PickType({ value, onChange }) {
  const [show, setShow] = React.useState(false);

  if (show) {
    return (
      <View>
        <Button title="Done" type="clear" onPress={() => setShow(false)} />
        <Picker selectedValue={value} onValueChange={onChange}>
          <Picker.Item label="Theory" value="Theory" />
          <Picker.Item label="Lab" value="Lab" />
        </Picker>
      </View>
    );
  }

  return (
    <>
      <Button title={value} type="outline" onPress={() => setShow(true)} />
    </>
  );
}
