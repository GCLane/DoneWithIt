import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../config/styles";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.textItem, defaultStyles.text]}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textItem: {
    padding: 20,
  },
});

export default PickerItem;
