import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Overlay, CheckBox, Text } from "react-native-elements";
import { heightPercentageToDP } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {setNotifications} from "./helper";

export default function enableNotificationsModal({
  visible,
  setVisible,
  dontShowAgain,
  setDontShowAgain,
}) {
  const [loading, setLoading] = useState(false); 
  async function Activate(dontShowAgain) {
    setLoading(true)
    console.log("yes");
    if (dontShowAgain) {
      console.log("wont show again");
      AsyncStorage.setItem("dontshowagain", "true").catch((e) =>
        console.log(e)
      );
    }
    
    let x = setNotifications();
    setTimeout(()=> {
        setLoading(x);
    },2000)
    
  }

  return (
    <View style={styles.container}>
      <Overlay isVisible={visible} onBackdropPress={setVisible}>
        <Text h4 h4Style={styles.modalHeader}>
          Click here to activate Notifications
        </Text>
        <Text h5 h5Style={styles.modalHeader} style={{ color: "red" }}>
          *Ignore this if you are a new user
        </Text>
        <Button
          title="Activate"
          containerStyle={styles.activationButton}
          loading={loading}
          buttonStyle={{ backgroundColor: "#fc5c65" }}
          onPress={() => Activate(dontShowAgain)}
          raised={true}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            title="Don't show again"
            checked={dontShowAgain}
            onPress={setDontShowAgain}
            containerStyle={styles.checkBox}
            checkedColor="#fc5c65"
          />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  modalHeader: {
    marginVertical: heightPercentageToDP("1%"),
  },
  activationButton: {
    marginVertical: heightPercentageToDP("2%"),
  },
  checkBox: {
    backgroundColor: "#fff",
  },
});
