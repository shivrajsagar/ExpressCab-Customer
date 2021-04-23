import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";
import { Picker } from "@react-native-picker/picker";

export default class PickerComponent extends Component {
  state = {
    city: "Noida",
  };

  render() {
    return (
      <Block>
        <Text>Picker</Text>
        <Picker
          selectedValue={this.state.city}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}
          enabled={false}
        >
          <Picker.Item label="Noida" value="Noida" />
          <Picker.Item label="Delhi" value="Delhi" />
        </Picker>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
