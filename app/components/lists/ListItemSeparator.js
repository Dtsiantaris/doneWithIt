import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../config/colors";
function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default ListItemSeparator;
