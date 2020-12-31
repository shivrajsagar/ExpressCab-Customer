import React, { Component } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import { Block, Text, Input, Button } from "galio-framework";

import materialTheme from "../constants/Theme";

//redux connect
import { connect } from "react-redux";
import { registerUser, registerUserValue } from "../redux/actions/authAction";

const { height } = Dimensions.get("screen");

class Signup extends Component {
  state = {
    errorMessage: null,
  };

  onSubmit = () => {
    const { name, email, mobile, address, aadhar, password } = this.props;
    if (!name || !email || !mobile || !address || !aadhar || !password) {
      this.setState({ errorMessage: "Please fill in mandatory section" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      this.props.registerUser({ name, email, mobile, address, aadhar, password });
    }
  };

  render() {
    const { errorMessage } = this.state;
    const {
      name,
      mobile,
      email,
      address,
      aadhar,
      password,
      loading,
      registerUserValue,
      error,
      registerMessage,
    } = this.props;
    return (
      <ScrollView>
        <Block flex safe style={styles.container}>
          <Block style={styles.card}>
            <Text center h5 color="white">
              Registration
            </Text>
            {errorMessage ? (
              <Text center size={20} color="white">
                {errorMessage}
              </Text>
            ) : null}
            {error ? (
              <Text center size={20} color="red">
                {error}
              </Text>
            ) : null}
            {registerMessage ? (
              <Text center size={20} color="green">
                {registerMessage}
              </Text>
            ) : null}
            <Input
              label="Your Name *"
              placeholder="Enter Your Name *"
              color="black"
              placeholderTextColor="black"
              value={name}
              onChangeText={(text) => registerUserValue({ prop: "name", value: text })}
            />
            <Input
              label="Mobile Number *"
              placeholder="Enter Mobile Number *"
              color="black"
              placeholderTextColor="black"
              value={mobile}
              onChangeText={(text) => registerUserValue({ prop: "mobile", value: text })}
            />
            <Input
              label="Email"
              placeholder="Enter Email"
              color="black"
              placeholderTextColor="black"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => registerUserValue({ prop: "email", value: text })}
            />
            <Input
              label="Address *"
              placeholder="Enter The Address *"
              color="black"
              placeholderTextColor="black"
              value={address}
              onChangeText={(text) => registerUserValue({ prop: "address", value: text })}
            />
            <Input
              label="Aadhar *"
              placeholder="Enter the aadhar *"
              color="black"
              placeholderTextColor="black"
              value={aadhar}
              onChangeText={(text) => registerUserValue({ prop: "aadhar", value: text })}
            />
            <Input
              label="Password *"
              placeholder="Enter Password *"
              color="black"
              placeholderTextColor="black"
              value={password}
              onChangeText={(text) => registerUserValue({ prop: "password", value: text })}
            />
            <Button
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={this.onSubmit}
              loading={loading}
            >
              Create Account
            </Button>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    justifyContent: "center",
    height: height,
  },
  card: {
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  const {
    name,
    email,
    address,
    aadhar,
    password,
    mobile,
    error,
    registerMessage,
    loading,
  } = state.auth;
  return {
    name,
    email,
    address,
    aadhar,
    password,
    mobile,
    error,
    registerMessage,
    loading,
  };
};

export default connect(mapStateToProps, { registerUser, registerUserValue })(Signup);
