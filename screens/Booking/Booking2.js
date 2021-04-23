import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Block, Icon, Input, Text } from "galio-framework";
import { BookRide } from "../../redux/actions/BookingAction";
import { connect } from "react-redux";

import materialTheme from "../../constants/Theme";
import { car_id } from "../Carlist";
import { Component } from "react";
const { width, height } = Dimensions.get("screen");

const Booking2 = ({ navigation, route }) => {
  const [pickup_address, setpickup_address] = useState("");
  const [drop_address, setdrop_address] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [pickup_date, setpickup_date] = useState("");
  const [pickup_time, setpickup_time] = useState("");
  const [drop_date, setdrop_date] = useState("");
  const [drop_time, setdrop_time] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setpickup_date(setpickup_date);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const pickupdate = () => {};
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };

  const { car_name, car_id1, cityname, fromCity, fare } = route.params;
  console.log(car_id1, car_name, cityname, fromCity, fare, pickup_address, drop_address, date, mode, show, pickup_date);

  return (
    <Block safe middle style={styles.container}>
      <Block style={styles.point}>
        <Text bold color="white">
          {fromCity} to {cityname}
          {"\n"}
          {car_name} {car_id1}
          {"\n"}
          {fare}
        </Text>
      </Block>
      <Block style={styles.card}>
        <Text muted bold center size={20}>
          --Booking Form--
        </Text>
        <Input
          label="Pick-Up-addresss"
          placeholder="Pickup Address"
          placeholderTextColor="gray"
          color="black"
          right
          icon="location-pin"
          family="Entypo"
          iconSize={24}
          iconColor="gray"
          value={pickup_address}
          onChangeText={(text) => setpickup_address(text)}
        />
        <Block row space="around">
          <TouchableOpacity style={styles.input} onPress={showDatepicker}>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} onPress={showTimepicker}>
            <Text>{date.toLocaleTimeString()}</Text>
          </TouchableOpacity>
        </Block>
        <Input
          label="Drop-addresss"
          placeholder="Drop Address"
          placeholderTextColor="gray"
          right
          color="black"
          icon="location-pin"
          family="Entypo"
          iconSize={24}
          iconColor="gray"
          value={drop_address}
          onChangeText={(text) => setdrop_address(text)}
        />
        <Block row space="around">
          <TouchableOpacity style={styles.input} onPress={showDatepicker}>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} onPress={showTimepicker}>
            <Text>{date.toLocaleTimeString()}</Text>
          </TouchableOpacity>
        </Block>
        <TouchableOpacity style={styles.button}>
          <Block row space="around">
            <Text bold color="white">
              Next Step
            </Text>
            <Icon name="chevron-with-circle-right" family="Entypo" size={20} color="white" />
          </Block>
        </TouchableOpacity>
        {show ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={() => onChange}
          />
        ) : null}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.BACKGROUND,
  },
  point: {
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    padding: 18,
    margin: materialTheme.SIZES.BASE,
    width: materialTheme.SIZES.BASE * 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: materialTheme.COLORS.ERROR,
    borderWidth: 1,
    borderBottomWidth: 4,
  },
  card: {
    backgroundColor: materialTheme.COLORS.GRAY,
    margin: materialTheme.SIZES.BASE,
    padding: materialTheme.SIZES.BASE,
  },
  input: {
    height: materialTheme.INPUT.INPUT_HEIGHT,
    width: materialTheme.SIZES.BASE * 9,
    backgroundColor: materialTheme.COLORS.INPUT,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: materialTheme.COLORS.ERROR,
    padding: materialTheme.SIZES.BASE,
    margin: 10,
    justifyContent: "center",
    width: materialTheme.SIZES.BASE * 10,
  },
});
export default Booking2;
