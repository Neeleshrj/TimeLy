import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

export async function addToStorage(
  className,
  slot,
  type,
  day,
  toTime,
  fromTime,
  color,
  notifId,
  navigation
) {
  
  let arr = await AsyncStorage.getItem(day);
  const data = [
    {
      uid: uuid.v4(),
      subname: className,
      slot: slot,
      type: type,
      from: fromTime,
      to: toTime,
      color: color,
      notifId: notifId,
    },
  ];

  arr = JSON.parse(arr).concat(data);
  
  //sorting 
  function compare(p1, p2) {
    if (new Date(p1.from).getTime() < new Date(p2.from).getTime()) {
      return -1;
    }
    if (new Date(p1.from).getTime() > new Date(p2.from).getTime()) {
      return 1;
    }
    return 0;
  }

  arr.sort(compare);

  await AsyncStorage.setItem(day, JSON.stringify(arr))
    .then(() => {
      console.log(arr);
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
