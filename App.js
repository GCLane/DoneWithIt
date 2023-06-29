import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AppText from "./app/components/AppText";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <MessagesScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
