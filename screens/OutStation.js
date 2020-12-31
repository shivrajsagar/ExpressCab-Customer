import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Button, Icon, Input, Text } from "galio-framework";
import materialTheme from "../constants/Theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width, height } = Dimensions.get("screen");

class OutStation extends Component {
  state = {
    date: new Date(),
    mode: "date",
    show: false,
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
  render() {
    const {navigation}=this.props
    const { show, mode, date } = this.state;
    const { onChange, showDatepicker, showTimepicker } = this;
    return (
      <Block flex style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block card style={styles.card}>
            <Block row middle style={styles.heading}>
              <Text size={35} color="gray">
                Book
              </Text>
              <Icon name="car" family="AntDesign" size={35} color="gray" />
              <Text size={35} color="gray">
                Now
              </Text>
            </Block>
            <Input
              placeholder="Enter Pick-up City"
              placeholderTextColor="gray"
              color="black"
              right
              icon="location-pin"
              family="entypo"
              iconSize={20}
              iconColor="gray"
            />
            <Input
              placeholder="Enter Drop City"
              placeholderTextColor="gray"
              color="black"
              right
              icon="location-pin"
              family="entypo"
              iconSize={20}
              iconColor="gray"
            />
            <TouchableOpacity onPress={showDatepicker} style={styles.inputbox}>
              <Block row space="between" style={styles.input}>
                <Text color="gray">{date.toLocaleDateString()}</Text>
                <Icon
                  name="calendar"
                  family="antdesign"
                  size={20}
                  color="gray"
                />
              </Block>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker} style={styles.inputbox}>
              <Block row space="between" style={styles.input}>
                <Text color="gray">{date.toLocaleTimeString()}</Text>
                <Icon name="time-slot" family="Entypo" size={20} color="gray" />
              </Block>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonbox} onPress={()=>navigation.navigate("Carlist")} >
              <Block row style={styles.button} space="between">
                <Text color="white">Search Cabs Here</Text>
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
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: materialTheme.COLORS.BACKGROUND,
  },
  card: {
    margin: 15,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    color: "gray",
  },
  buttonbox: {
    backgroundColor: "white",
    height: 45,
    padding: 5,
    marginTop: 7,
    marginBottom: 7,
    justifyContent: "center",
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
  },
  button: {
    margin: 13,
  },
  inputbox: {
    backgroundColor: "white",
    height: 45,
    padding: 5,
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 5,
    justifyContent: "center",
  },
  input: {
    margin: 13,
  },
});

export default OutStation;
