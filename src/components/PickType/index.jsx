import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Overlay, Text } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/FontAwesome';

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
  label,
}) {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  if (options == 2) {
    return (
      <>
        <View>
          <Text>{label}</Text>
        </View>
        <Button
          title={value}
          type="outline"
          onPress={() => setVisible(true)}
          buttonStyle={styles.btn}
          titleStyle={{ color: "#fff" }}
          icon={
            <Icon
              name="caret-down"
              size={15}
              color="white"
              style={styles.dropIcon}
            />
          }
          iconRight
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
            buttonStyle={{backgroundColor: 'transparent'}}
            titleStyle={{ color: "#fc5c65" }}
          />
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            mode="dropdown"
            style={styles.picker}
            // dropdownIconColor="#fff"
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
        <View>
          <Text>{label}</Text>
        </View>
        <Button
          title={value}
          type="outline"
          onPress={() => setVisible(true)}
          buttonStyle={styles.btn}
          titleStyle={{ color: "#fff" }}
          icon={
            <Icon
              name="caret-down"
              size={15}
              color="white"
              style={styles.dropIcon}
            />
          }
          iconRight
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
            buttonStyle={{backgroundColor: 'transparent'}}
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
    backgroundColor: "#2c3e50",
    marginTop: heightPercentageToDP('1%')
    // backgroundColor: '#f1f2f6'
  },
  overlay: {
    width: widthPercentageToDP("50%"),
  },
  dropIcon: {
    marginHorizontal: widthPercentageToDP('2%'),
  },
});
