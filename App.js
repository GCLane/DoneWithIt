import React from "react";
import { StyleSheet, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  /*return (
    <View style={styles.container}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );*/
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    alignItems: "center",
    justifyContent: "center",*/
    backgroundColor: "#f8f4f",
    padding: 20,
    paddingTop: 200,
  },
});
