import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[style, styles.screen]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
