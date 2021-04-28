import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Block, Text, Button } from "galio-framework";
import { materialTheme } from "../constants";
import { fetchPrice } from "../redux/actions/placeAction";
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");
class City extends Component {
  render() {
    const { navigation, item } = this.props;
    return (
      <Block row card style={styles.container}>
        <Block middle>
          <Text color="white" size={15} style={styles.textstyle}>
            {item.city_name}
          </Text>
        </Block>
        <Block middle>
          <Text color="white">From</Text>
          <Text color="white">
            {"\u20b9"}
            {item.fare}
          </Text>
        </Block>

        <Button
          round
          style={styles.button}
          size="small"
          onPress={() =>
            navigation.navigate("Car List", {
              TOcityID: item.city_id,
              cityname: item.city_name,
              statename: item.state_name,
              fare: item.fare,
              Fromcity: global.FROMCITY,
            })
          }
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
    width: 115,
  },
  textstyle1: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  price: state.place.price,
  message: state.place.message,
});

export default connect(mapStateToProps, { fetchPrice })(City);
