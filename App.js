import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AppButton from "./app/components/AppButton";

export default function App() {
  const netInfo = useNetInfo();

  return (
    <AppButton
      disabled={netInfo.isInternetReachable}
      title="Press"
      onPress={() => console.log("Laugh")}
    />
  );
}
