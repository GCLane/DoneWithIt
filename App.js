import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
