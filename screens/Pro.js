import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";

import { materialTheme } from "../constants/";

export default class Pro extends React.Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <Text size={25} color="white">
          Coming Soon ....
        </Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
  },
});
