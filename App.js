import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
