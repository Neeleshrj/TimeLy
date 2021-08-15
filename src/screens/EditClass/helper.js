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
  navigation
) {
  var arr = await AsyncStorage.getItem(day)
    .then(async () => {
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
      console.log(objIndex);
      if (objIndex != -1) {
        arr[objIndex] = data;
      } else {
        arr = arr.concat(data);
        
      }

      await AsyncStorage.setItem(day, JSON.stringify(arr))
        .then(() => {
          console.log(arr);
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
    })
    .catch((e) => console.log(e));
  //   console.log(arr);
}
