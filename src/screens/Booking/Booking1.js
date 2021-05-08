import React from "react";
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

class Booking1 extends Component {
  state = {
    date: new Date(),
    mode: "date",
    show: false,
    pickup_address: "xyz",
    drop_address: "abc",
    pickup_date: "04",
    pickup_time: "05",
    drop_date: "45",
    drop_time: "8",
    car_id: "2",
  };

  componentDidMount = () => {
    console.log(JSON.stringify(this.props));
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ show: Platform.OS === "ios" });
    this.setState({ date: currentDate });
  };

  showMode = (currentMode) => {
    this.setState({ show: true });
    this.setState({ mode: currentMode });
  };
  showDatepicker = () => {
    this.showMode("date");
  };
  showTimepicker = () => {
    this.showMode("time");
  };
  onSubmit = () => {
    const {
      customer_id,
      car_id,
      pickup_location,
      drop_location,
      pickup_address,
      drop_address,
      pickup_time_date,
      drop_time_date,
      amount,
    } = this.props;
    if (
      !customer_id ||
      !car_id ||
      !pickup_location ||
      !drop_location ||
      !pickup_address ||
      !drop_address ||
      !pickup_time_date ||
      !drop_time_date ||
      !amount
    ) {
      this.setState({ errorMessage: "Please fill in mandatory section" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.registerUser({
        customer_id,
        car_id,
        pickup_location,
        drop_location,
        pickup_address,
        drop_address,
        pickup_time_date,
        drop_time_date,
        amount,
      });
      console.log(amount);
    }
  };

  render() {
    const {
      show,
      mode,
      date,
      pickup_address,
      drop_address,
      car_id,
    } = this.state;
    const { onChange, showDatepicker, showTimepicker } = this;
    const { car_id1, car_name } = this.props.route;

    const CARNAMES = global.CARNAME;
    // console.log(CARNAMES, pickup_address, drop_address, car_id);

    console.log(car_name);
    return (
      <Block safe middle style={styles.container}>
        <Block style={styles.point}>
          <Text bold color="white">
            {global.FROMCITY} to {global.TOCITY} {global.FROMCITYID}
            {CARNAMES} {car_id}
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
            onChangeText={(text) => this.setState({ pickup_address: text })}
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
            onChangeText={(text) => this.setState({ drop_address: text })}
          />
          <Block row space="around">
            <TouchableOpacity style={styles.input} onPress={showDatepicker}>
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.input} onPress={showTimepicker}>
              <Text>{date.toLocaleTimeString()}</Text>
            </TouchableOpacity>
          </Block>
          <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
            <Block row space="around">
              <Text bold color="white">
                Next Step
              </Text>
              <Icon
                name="chevron-with-circle-right"
                family="Entypo"
                size={20}
                color="white"
              />
            </Block>
          </TouchableOpacity>
          {show ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          ) : null}
        </Block>
      </Block>
    );
  }
}

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

export default Booking1;
