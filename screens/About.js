import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { width } = Dimensions.get("screen");

export default class About extends Component {
  render() {
    return (
      <Block flex center style={styles.container}>
        <Block style={styles.card}>
          <Block style={styles.text}>
            <Text h4>About Us:</Text>
            <Text>
              We are India's Favourite One Way Taxi Service Provider. It has been founded on the
              belief: Return Fare, Not Fair! So now when you travel one-way, you pay for one-way.
            </Text>
            <Text muted h5 style={styles.heading}>
              Core Value
            </Text>
            <Text>
              We are driven by one single value: Trust. Whenever customer makes a booking with us.
              They put a lot of trust on us.
            </Text>
            <Text muted h5 style={styles.heading}>
              Trust that:
            </Text>
            <Text>
              Cab / Taxi will arrive on Time Cab / Taxi will be clean & Well-Maintained Driver will
              be well-behaved & Professional in nature Fares will be transparent in nature with no
              hidden charges. Any-time 24x7 Support Team, whenever you need us
            </Text>
          </Block>
          <Image
            source={require("../assets/images/about-img.png")}
            resizeMode="contain"
            style={{ width: width, height: 300 }}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
  heading: {
    marginTop: 20,
  },
});
