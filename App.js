import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RootNav from "./src/routes/rootNav";

export default function App() {

  async function createEmptyStorage(){
    const monday = ["Monday", JSON.stringify({
      Theory: {
        Morning: {
          A1: {
            to: "08:00" , from: "08:50", subname: ""
          }, 
          F1: {
            to: "08:55" , from: "09:45", subname: ""
          },
          D1: {
            to: "09:50" , from: "10:40", subname: ""
          },
          TB1: {
            to: "10:45" , from: "11:35", subname: ""
          },
          TG1: {
            to: "11:40" , from: "12:30", subname: ""
          },
        },
        Evening: {
          A2: {
            to: "02:00" , from: "02:50", subname: ""
          }, 
          F2: {
            to: "02:55" , from: "03:45", subname: ""
          },
          D2: {
            to: "03:50" , from: "04:40", subname: ""
          },
          TB2: {
            to: "04:45" , from: "05:35", subname: ""
          },
          TG2: {
            to: "05:40" , from: "06:30", subname: ""
          },
        }
      }
    })
  ]
    try{
      await AsyncStorage.multiSet([monday])
      console.log('default values set')
    } catch(e){
      console.log(e)
    }    
  }

  useEffect(() => {
    async function checkEmpty() {
      await AsyncStorage.getAllKeys()
        .then((res) => {
          if(res.length == 0)
            createEmptyStorage();
        })
        .catch((e) => console.log(e));
    }
    checkEmpty();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNav />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
