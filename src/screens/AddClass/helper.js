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
    },
  ];

  arr = JSON.parse(arr).concat(data);
  // let sortArr = arr.sort(function(p1,p2){
  //   return p1.from.getTime() - p2.from.getTime();
  // })
  
  // console.log(sortArr);
  
  // function compare(p1,p2){
  //   if(p1.from.getTime() > p2.from.getTIme()){
  //     return -1;
  //   }
  //   if(p1.from.getTime() < p2.from.getTIme()){
  //     return 1;
  //   }
  //   return 0;
  // }

  // console.log(arr.sort(compare));

  await AsyncStorage.setItem(day, JSON.stringify(arr))
    .then(() => {
      console.log("added to async storage");
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
