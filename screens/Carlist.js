import React, { Component } from "react";
import { Dimensions, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Block, Icon, Text } from "galio-framework";

import { materialTheme } from "../constants";

import { connect } from "react-redux";
import { CarDetail } from "../redux/actions/carAction";

const { width, height } = Dimensions.get("screen");

class Carlist extends Component {
  componentDidMount = () => {
    this.props.CarDetail();
  };
  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const { cityname, TOcityID, FromData, statename, fare } = this.props.route.params;
    return (
      <Block card style={styles.card}>
        {item.car_id ? (
          <>
            <Block middle style={styles.imageContainer}>
              <Image source={{ uri: item.car_image }} resizeMode={"contain"} style={{ height: 200, width: 200 }} />
            </Block>
            <Text size={24}>{item.car_name}</Text>
            <Block row>
              <Block flex row space="evenly">
                <Icon name="user" family="Entypo" size={16} color="gray" />
                <Text size={16}>4 Passengers</Text>
              </Block>
              <Block flex row space="evenly">
                <Icon name="shopping-bag" family="Entypo" size={16} color="gray" />
                <Text size={16}>2 Luggage</Text>
              </Block>
            </Block>
          </>
        ) : null}
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() =>
            navigation.navigate("Booking2", {
              car_name: item.car_name,
              car_id1: item.car_id,
              cityname: cityname,
              fromCity: FromData,
              fare: fare,
            })
          }
        >
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
    const { data, loading } = this.props;
    const { cityname, TOcityID, FromData, statename, fare } = this.props.route.params;

    return (
      <ScrollView>
        <Block safe style={styles.container}>
          <Text center h5 color="white">
            {FromData} To {cityname}
          </Text>
          <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => "key" + index} />
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

const mapStateToProps = (state) => ({
  loading: state.car.loading,
  data: state.car.Car_Data,
});

export default connect(mapStateToProps, { CarDetail })(Carlist);
