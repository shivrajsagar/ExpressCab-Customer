import React from "react";
import { StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { Block, Icon, Text } from "galio-framework";

import materialTheme from "../constants/Theme";

const { width, height } = Dimensions.get("screen");

const Car = () => {
  return (
    <Block card style={styles.card}>
      <Block middle style={styles.imageContainer}>
        <Image
          source={item.image}
          resizeMode={"contain"}
          style={{ height: 200, width: 200 }}
        />
      </Block>
      <Text size={30}>{item.carname}</Text>
      <Block row>
        <Block flex row space="evenly">
          <Icon name="user" family="Entypo" size={16} color="gray" />
          <Text size={16}>{item.passenger} Passengers</Text>
        </Block>
        <Block flex row space="evenly">
          <Icon name="shopping-bag" family="Entypo" size={16} color="gray" />
          <Text size={16}>{item.luggage} Luggage</Text>
        </Block>
      </Block>
      <TouchableOpacity style={styles.buttonBox}>
        <Block row space="around">
          <Text size={20} color="white">
            Select
          </Text>
          <Icon name="car" family="AntDesign" size={20} color="white" />
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    borderWidth: 1,
  },
  imageContainer: {
    width: width - materialTheme.SIZES.BASE * 2,
  },
  buttonBox: {
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    width: 180,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Car;
