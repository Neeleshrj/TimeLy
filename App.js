import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RootNav from "./src/routes/rootNav";

import Loading from "./src/components/Loader";

export default function App() {

  const [loading, setLoading] = React.useState(false);

  async function createEmptyStorage(){
    const monday = ["Monday", JSON.stringify([])]
    const tuesday = ["Tuesday", JSON.stringify([])]
    const wednesday = ["Wednesday", JSON.stringify([])]
    const thursday = ["Thursday", JSON.stringify([])]
    const friday = ["Friday", JSON.stringify([])]
    const saturday = ["Saturday", JSON.stringify([])]
    const sunday = ["Sunday", JSON.stringify([])]
    await AsyncStorage.multiSet([monday, tuesday, wednesday, thursday, friday, saturday, sunday])
    .then(()=> setLoading(false))
    .catch(e => console.log(e));
    console.log('default values set')  
  }

  useEffect(() => {
    async function checkEmpty() {
      setLoading(true);
      await AsyncStorage.getAllKeys()
        .then(async (res) => {
          // await AsyncStorage.clear()
          if(res.length == 0)
          {
            createEmptyStorage();
          }
          else{
            setLoading(false);
          }     
        })
        .catch((e) => console.log(e));
    }
    checkEmpty();
  }, []);

  if(loading){
    return(<Loading />)
  }
  else{
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <RootNav />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
  
}
















// Theory: {
  //   Morning: {
  //     A1: {
  //       to: "08:00" , from: "08:50", subname: ""
  //     }, 
  //     F1: {
  //       to: "08:55" , from: "09:45", subname: ""
  //     },
  //     D1: {
  //       to: "09:50" , from: "10:40", subname: ""
  //     },
  //     TB1: {
  //       to: "10:45" , from: "11:35", subname: ""
  //     },
  //     TG1: {
  //       to: "11:40" , from: "12:30", subname: ""
  //     },
  //   },
  //   Evening: {
  //     A2: {
  //       to: "02:00" , from: "02:50", subname: ""
  //     }, 
  //     F2: {
  //       to: "02:55" , from: "03:45", subname: ""
  //     },
  //     D2: {
  //       to: "03:50" , from: "04:40", subname: ""
  //     },
  //     TB2: {
  //       to: "04:45" , from: "05:35", subname: ""
  //     },
  //     TG2: {
  //       to: "05:40" , from: "06:30", subname: ""
  //     },
  //   }
  // }