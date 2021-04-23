import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Myrides extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is My Ride</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
export default Myrides;
