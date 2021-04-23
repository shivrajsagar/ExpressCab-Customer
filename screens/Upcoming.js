import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text>You have not booked any rides yet</Text>
    </View>
  );
};
export default Upcoming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
