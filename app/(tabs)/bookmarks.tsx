import { StyleSheet, Text, View } from "react-native";
import React from "react";

const bookmarks = () => {
  return (
    <View style={styles.container}>
      <Text>bookmarks</Text>
    </View>
  );
};

export default bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
