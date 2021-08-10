import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider} from "react-native-safe-area-context";

import RootNav from "./src/routes/rootNav";

export default function App() {
  return (
    <NavigationContainer>
        <SafeAreaProvider>
          <RootNav />
        </SafeAreaProvider>
    </NavigationContainer>
  );
}