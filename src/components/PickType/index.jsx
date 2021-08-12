import React from "react";
import { StyleSheet } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function PickType({
  value,
  onChange,
  options,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
}) {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  if (options == 2) {
    return (
      <>
        <Button
          title={value}
          type="outline"
          onPress={() => setVisible(true)}
          buttonStyle={styles.btn}
          titleStyle={{ color: "#fff" }}
        />
        <Overlay
          isVisible={visible}
          onBackdropPress={() => toggleOverlay()}
          overlayStyle={styles.overlay}
        >
          <Button
            title="Done"
            type="clear"
            onPress={() => toggleOverlay()}
            buttonStyle={styles.btn}
            titleStyle={{ color: "#fc5c65" }}
          />
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            mode="dropdown"
          >
            <Picker.Item label={option1} value={option1} />
            <Picker.Item label={option2} value={option2} />
          </Picker>
        </Overlay>
      </>
    );
  } else {
    return (
      <>
        <Button
          title={value}
          type="outline"
          onPress={() => setVisible(true)}
          buttonStyle={styles.btn}
          titleStyle={{ color: "#fff" }}
        />
        <Overlay
          isVisible={visible}
          onBackdropPress={() => toggleOverlay()}
          overlayStyle={styles.overlay}
        >
          <Button
            title="Done"
            type="clear"
            onPress={() => toggleOverlay()}
            buttonStyle={styles.btn}
            titleStyle={{ color: "#fc5c65" }}
          />
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            mode="dropdown"
          >
            <Picker.Item label={option1} value={option1} />
            <Picker.Item label={option2} value={option2} />
            <Picker.Item label={option3} value={option3} />
            <Picker.Item label={option4} value={option4} />
            <Picker.Item label={option5} value={option5} />
            <Picker.Item label={option6} value={option6} />
            <Picker.Item label={option7} value={option7} />
          </Picker>
        </Overlay>
      </>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderColor: "transparent",
    // backgroundColor: '#f1f2f6'
  },
  overlay: {
    width: widthPercentageToDP("50%"),
  },
});
