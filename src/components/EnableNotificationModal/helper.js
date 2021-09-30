import AsyncStorage from "@react-native-async-storage/async-storage";
import { schedulePushNotification } from "../../screens/notification";
import { addToStorage } from "../../screens/EditClass/helper";

export function setNotifications() {
  console.log("adding notifications...");
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var classList = [];
  var id = "";
  var flag = true;
  days.forEach(async (day) => { 
    await AsyncStorage.getItem(day)
      .then((res) => {
        classList = JSON.parse(res);
        // console.log(classList);
        if (classList.length) {
        //   console.log(day, "not empty....adding notifications...");
          classList.forEach(async (l) => {
              (async () => {
                await schedulePushNotification(l.subname,l.slot,l.type,new Date(l.from),day)
                .then((res) => {
                    id = res;
                    flag = true;
                }).catch(e => console.log(e));
                addToStorage(l.uid, l.subname, l.slot, l.type, day, l.to, l.from, day, l.color, id);
                // console.log(l.subname,l.slot,l.type,new Date(l.from),day)
                // console.log(id);
            })();
          });
        }
      })
      .catch((e) => console.log(e));
  });
  if(flag){
      console.log('completed')
      return false;
  }
}
