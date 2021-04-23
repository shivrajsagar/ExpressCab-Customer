import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Block, Icon, Text } from "galio-framework";
import materialTheme from "../constants/Theme";

const DATA = [
  {
    id: 1,
    icon: "price-ribbon",
    title: "Transparent Pricing",
    description:
      "We will show taxes (Service Tax & One-Way Toll Tax before booking of ride). You only pay what you see before booking, no other charges.",
  },
  {
    id: 2,
    icon: "help-with-circle",
    title: "24/7 Customer Care",
    description: "Available to help you at any moment: 9999999999",
  },
  {
    id: 3,
    icon: "home",
    title: "Home Pickup & Drop",
    description:
      "Your pick-up address can be anywhere in pick-up city and drop address can be anywhere in destination city including.",
  },
  {
    id: 4,
    icon: "price-tag",
    title: "No Extra KMs Charge",
    description:
      "We do not charge based on KMs. There is no extra KMs Fare applicable. Get Peace of Mind, so that driver doesn’t overcharge you by taking a detour.",
  },
  {
    id: 5,
    icon: "tag",
    title: "Assured Cab",
    description:
      "If you have Booking Confirmation, rest assured you will get cab.",
  },
  {
    id: 6,
    icon: "location-pin",
    title: "GPS Enabled",
    description:
      "Each Cab is GPS Enabled. Now Track Cab as they arrive to pick you up",
  },
  {
    id: 7,
    icon: "credit-card",
    title: "No Advance Payment",
    description: "Required for booking of Cab.",
  },
  {
    id: 8,
    icon: "tools",
    title: "Safe & Convenient Ride",
    description:
      "Enabled via our specialized experience of last 2 yrs enabled by our tech platform.",
  },
];

class Services extends Component {
  renderItem = ({ item }) => {
    return (
      <Block style={styles.card}>
        <Icon
          name={item.icon}
          family="Entypo"
          size={materialTheme.SIZES.BASE * 3.5}
          color="#dd3751"
        />
        <Block style={{ margin: 10 }}>
          <Text size={20} color={materialTheme.COLORS.HEADING}>
            {item.title}
          </Text>
          <Text size={15} color={materialTheme.COLORS.PARAGRAPH}>
            {item.description}
          </Text>
        </Block>
      </Block>
    );
  };
  render() {
    return (
      <Block flex>
        <Text center h5>
          Our Services
        </Text>
        <Text center>
          We also provide Local Car Rental Hourly Packages and Outstation Cabs.
        </Text>
        <Block card style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginTop: 10,
    margin: 5,
  },
  card: {
    margin: 10,
  },
});

export default Services;
