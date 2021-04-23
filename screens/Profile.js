import React from "react";
import { StyleSheet, Image } from "react-native";
import { Block, Icon, Text } from "galio-framework";
import { materialTheme } from "../constants";

class Profile extends React.Component {
  state = {
    user: "",
  };

  fetchUser = async () => {
    const value = await AsyncStorage.getItem("http://demo.expresscab.in/aashtha-api/user");
    const user = JSON.parse(value);
    console.log(user);
    this.setState({ user });
  };

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate() {
    this.fetchUser();
  }
  render() {
    const { user } = this.state;
    return (
      <Block style={styles.container}>
        <Block card style={styles.card}>
          <Block middle>
            <Text h5>Profile</Text>
            <Image source={require("../assets/images/avatar.png")} resizeMode={"contain"} />
          </Block>
          <Block row style={styles.heading}>
            <Icon name="man" family="Entypo" size={25} color="purple" />
            <Text size={20} style={styles.text}>
              {user.name}
              Admin
            </Text>
          </Block>
          <Block row style={styles.heading}>
            <Icon name="email" family="Entypo" size={25} color="purple" />
            <Text size={20} style={styles.text}>
              admin@gmail.com
            </Text>
          </Block>
          <Block row style={styles.heading}>
            <Icon name="mobile" family="Entypo" size={25} color="purple" />
            <Text size={20} style={styles.text}>
              1234567890
            </Text>
          </Block>
          <Block row style={styles.heading}>
            <Icon name="location-pin" family="Entypo" size={25} color="purple" />
            <Text size={20} style={styles.text}>
              Noida, India
            </Text>
          </Block>
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
  card: {
    marginTop: 20,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  heading: {
    marginTop: 20,
    marginLeft: 30,
  },
  text: {
    marginTop: 0,
    marginLeft: 20,
  },
});

export default Profile;
