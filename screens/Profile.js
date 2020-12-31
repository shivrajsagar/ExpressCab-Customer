import React from "react";
import { StyleSheet, Image } from "react-native";
import { Block, Icon, Text } from "galio-framework";
import { materialTheme } from "../constants";

const Profile = () => {
  return (
    <Block flex safe style={styles.container}>
      <Block card style={styles.card}>
        <Block middle>
          <Text h5>Profile</Text>
          <Image source={require("../assets/images/avatar.png")} resizeMode={"contain"} />
        </Block>
        <Block middle style={styles.heading}>
          <Icon name="man" family="Entypo" size={25} color="purple" />
          <Text size={20} style={styles.text}>
            Admin Kumar
          </Text>
        </Block>
        <Block middle style={styles.heading}>
          <Icon name="email" family="Entypo" size={25} color="purple" />
          <Text size={20} style={styles.text}>
            admin@gmail.com
          </Text>
        </Block>
        <Block middle style={styles.heading}>
          <Icon name="mobile" family="Entypo" size={25} color="purple" />
          <Text size={20} style={styles.text}>
            1234567890
          </Text>
        </Block>
        <Block middle style={styles.heading}>
          <Icon name="location-pin" family="Entypo" size={25} color="purple" />
          <Text size={20} style={styles.text}>
            Noida,India
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: materialTheme.COLORS.BACKGROUND,
    justifyContent: "center",
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },
  heading: {
    marginTop: 10,
  },
  text: {
    marginTop: 5,
  },
});

export default Profile;
