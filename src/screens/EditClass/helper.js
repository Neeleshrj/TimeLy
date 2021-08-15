import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function addToStorage(
  uid,
  className,
  slot,
  type,
  day,
  toTime,
  fromTime,
  Day,
  navigation
) {
  var arr = await AsyncStorage.getItem(day);

  const data = {
    uid: uid,
    subname: className,
    slot: slot,
    type: type,
    from: fromTime,
    to: toTime,
  };

  arr = JSON.parse(arr);
  let objIndex = arr.findIndex((obj) => obj.uid == uid);

  if (objIndex != -1) {
    arr[objIndex] = data;
  } else {
    arr = arr.concat(data);
    removeFromStorage(uid, navigation, Day, 0);
  }

  await AsyncStorage.setItem(day, JSON.stringify(arr))
    .then(() => {
      console.log("edited and added to async storage");
      Alert.alert("Success!", "Class Added Successfully!", [
        {
          text: "Ok",
          onPress: () => {
            navigation.navigate("timetable");
          },
        },
      ]);
    })
    .catch((e) => {
      console.log("failed to store..");
      Alert.alert("Failed!", e, [
        {
          text: "Retry",
          onPress: () => console.log("failed..."),
        },
      ]);
    });
}

export async function removeFromStorage(uid, navigation, day, showMsg) {
  var arr = await AsyncStorage.getItem(day);

  arr = JSON.parse(arr);
  let objIndex = arr.findIndex((obj) => obj.uid == uid);

  arr.splice(objIndex, 1);

  // console.log(arr);

  await AsyncStorage.setItem(day, JSON.stringify(arr))
    .then(() => {
      console.log("edited and added to async storage");
      if(showMsg)
      {
        Alert.alert("Success!", "Class Removed!", [
            {
              text: "Ok",
              onPress: () => {
                navigation.navigate("timetable");
              },
            },
          ]);
      }
    })
    .catch((e) => {
      console.log("failed to Remove..");
      Alert.alert("Failed!", e, [
        {
          text: "Retry",
          onPress: () => console.log("failed..."),
        },
      ]);
    });
}
