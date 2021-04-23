import React, { Component } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Block, Text, Button } from "galio-framework";

import { materialTheme } from "../constants";

import { fetchCity } from "../redux/actions/placeAction";
import { fetchprice } from "../redux/actions/priceaction";
import { connect } from "react-redux";
import StateSearch from "./StateSearch";

const { width } = Dimensions.get("screen");

statedata = ({ item, navigation }) => {
  <StateSearch item={item} navigation={navigation} />;
};

class City extends Component {
  render() {
    const { navigation, item } = this.props;

    return (
      <Block row card style={styles.container}>
        {global.FROMCITYID ? (
          <>
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
          </>
        ) : null}
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
              FromData: global.FROMCITY,
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
  loading: state.price.loading,
  data: state.price.pricedata,
});

export default connect(mapStateToProps, { fetchprice })(City);
