import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Block, Text, Button } from "galio-framework";

import { materialTheme } from "../constants";

const { width } = Dimensions.get("screen");

export default class Hourly extends Component {
  render() {
    const { navigation, item } = this.props;
    return (
      <Block row card style={styles.container}>
        <Block middle>
          <Text color="white" size={15} style={styles.textstyle}>
            Noida
          </Text>
        </Block>
        <Block middle>
          <Text color="white">From</Text>
          <Text color="white">
            {"\u20b9"}
            500
          </Text>
        </Block>
        <Button
          round
          style={styles.button}
          size="small"
          onPress={() => navigation.navigate("Car List", { item: item })}
        >
          Book Now
        </Button>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  button: {
    width: width / 4,
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
  },
  textstyle: {
    width: 70,
  },
  textstyle1: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
