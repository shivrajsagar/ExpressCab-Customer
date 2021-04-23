import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Block, Button, Input, Text } from "galio-framework";
import materialTheme from "../constants/Theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

//store connect
import { connect } from "react-redux";
import { loginUser, userValue } from "../redux/actions/authAction";

const { height } = Dimensions.get("window");

class Login extends React.Component {
  state = {
    errorMessage: null,
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { mobile, password } = this.props;
    if (!mobile || !password) {
      this.setState({ errorMessage: "Please fill all fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 2000);
    } else {
      this.props.loginUser({ mobile, password });
    }
  };

  render() {
    const { mobile, password, error, loading,message, navigation, userValue } = this.props;
    const { errorMessage } = this.state;

    return (
      <ScrollView>
        <Block flex style={styles.container}>
          <Block card style={styles.card}>
            <Text h5 center>
              Login
            </Text>
            {errorMessage ? (
              <Text center size={20} color="red">
                {errorMessage}
              </Text>
            ) : null}
            {error ? (
              <Text center size={20} color="red">
                {error}
              </Text>
            ) : null}
            {message ? (
              <Text center color="green" size={20}>
                {message}
              </Text>
            ) : null}
            <Input
              type="phone-pad"
              label="Mobile *"
              placeholder="Your Mobile *"
              color="black"
              placeholderTextColor="black"
              value={mobile}
              onChangeText={(number) => userValue({ prop: "mobile", value: number })}
            />
            <Input
              label="Password *"
              placeholder="Your Password *"
              color="black"
              placeholderTextColor="black"
              value={password}
              onChangeText={(text) => userValue({ prop: "password", value: text })}
            />
            <Block middle>
              <Button
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={this.onSubmit}
              >
                Login
              </Button>
            </Block>
          </Block>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text center h5 color="white" style={{ margin: 10 }}>
              Register Here
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("App")}>
            <Text center h5 color="white" style={{ marginTop: 40 }}>
              Skip
            </Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: height,
    backgroundColor: materialTheme.COLORS.BACKGROUND,
  },
  card: {
    margin: 10,
    shadowColor: "gray",
    backgroundColor: "white",
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  mobile: state.auth.mobile,
  password: state.auth.password,
  error: state.auth.error,
  message: state.auth.message,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { loginUser, userValue })(Login);
