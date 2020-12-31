import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Block, Text, Button } from "galio-framework";

import { materialTheme } from "../constants";
import { withNavigation } from "@react-navigation/compat";

const { width } = Dimensions.get("screen");

class City extends Component {
  render() {
    const { item, navigation } = this.props;
    return (
      <Block row style={styles.container}>
        <Block middle>
          <Text color="white" size={20} center>
            {item.city}
          </Text>
        </Block>
        <Block middle>
          <Text color="white">From</Text>
          <Text color="white">
            {"\u20b9"}
            {item.price}
          </Text>
        </Block>

        <Button
          round
          style={styles.button}
          size="small"
          onPress={() => navigation.navigate("Booking")}
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
});

export default withNavigation(City);
