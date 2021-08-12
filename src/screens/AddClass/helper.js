import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import uuid from 'react-native-uuid';

export async function addToStorage(
  className,
  slot,
  type,
  day,
  toTime,
  fromTime,
  navigation
) {
  // console.log(className)
  // console.log(slot)
  // console.log(type)
  // console.log(day)
  // console.log(toTime)
  // console.log(fromTime)
  // const uid = uuidv4();
  let arr = await AsyncStorage.getItem(day);
  // console.log(arr);
  const data = [
    {
      uid: uuid.v4(),
      subname: className,
      slot: slot,
      type: type,
      from: fromTime,
      to: toTime,
    },
  ];

  arr = JSON.parse(arr).concat(data);

  await AsyncStorage.setItem(day, JSON.stringify(arr))
    .then(() => {
      console.log("added to async storage");
      Alert.alert("Success!", "Class Added Successfully!", [
        {
          text: "Ok",
          onPress: () => {
            console.log("clearing values....");
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
