import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "../AppText";
import colors from "../../config/colors";

function ListItem({ title, subTitle, image, onPress, renderRightAction }) {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.lightgray,
  },
  title: {
    fontWeight: 600,
  },
});
export default ListItem;
