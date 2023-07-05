import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.lightgray}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={[styles.text, defaultStyles.text]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={[styles.placeholder, defaultStyles.text]}>
              {placeholder}
            </AppText>
          )}
          {/* Removed space before placeholder */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.lightgray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={(
              { item } // Added parentheses to wrap the arrow function
            ) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }} // Added parentheses to wrap the arrow function
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.lightgray,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
