import React, { Component } from "react";
import { Dimensions, StyleSheet, FlatList, Image, View } from "react-native";
import { Block, Icon, Text } from "galio-framework";

import { data, materialTheme } from "../constants";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");
const { CARLIST } = data;

class Carlist extends Component {
  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Block card style={styles.card}>
        <Block middle style={styles.imageContainer}>
          <Image source={item.image} resizeMode={"contain"} style={{ height: 200, width: 200 }} />
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
        <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate("Booking")}>
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
  render() {
    const { renderItem } = this;
    return (
      <ScrollView>
        <Block safe style={styles.container}>
          <Text center h5 color="white">
            Noida To Lucknow
          </Text>
          <FlatList
            data={CARLIST}
            renderItem={renderItem}
            keyExtractor={(item, index) => "key" + index}
          />
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.BACKGROUND,
  },
  card: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
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

export default Carlist;
