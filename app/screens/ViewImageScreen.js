import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
      <View style={styles.deleteIcon} />
      <View style={styles.closeIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
