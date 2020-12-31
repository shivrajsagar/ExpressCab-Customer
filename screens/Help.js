import React, { Component } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Block, Icon, Input, Text } from "galio-framework";
import materialTheme from "../constants/Theme";
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

class Contact extends Component {
  state = {
    errorMessage: null,
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  onSubmit = () => {
    console.log("Button pressed");
    const { name, email, message } = this.state;
    if (!name || !email || !message) {
      this.setState({ errorMessage: "Please fill in required fields" });
      setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 3000);
    } else {
      console.log("Else statement called");
    }
  };

  render() {
    const { name, email, subject, message, errorMessage } = this.state;
    return (
      <ScrollView>
        <Block flex center style={styles.container}>
          <Text h5>Contact Us</Text>
          <Text center>
            Lorem Ipsum passages, and more recently with desktop publishing software like aldus
            pageMaker including versions of all the Lorem Ipsum generators
          </Text>
          <Block style={styles.input}>
            {errorMessage ? (
              <Text size={20} color="red" center>
                {errorMessage}
              </Text>
            ) : null}
            <Input
              label="Name *"
              placeholder="Name"
              color="black"
              placeholderTextColor="black"
              value={name}
              onChangeText={(text) => this.setState({ name: text })}
            />
            <Input
              label="Email *"
              placeholder="Email"
              color="black"
              placeholderTextColor="black"
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              label="Subject"
              placeholder="Your Subject"
              color="black"
              placeholderTextColor="black"
              value={subject}
              onChangeText={(text) => this.setState({ subject: text })}
            />
            <Input
              label="Message *"
              placeholder="Your Message"
              color="black"
              placeholderTextColor="black"
              value={message}
              onChangeText={(text) => this.setState({ message: text })}
            />
            <TouchableOpacity style={styles.buttonBox} onPress={this.onSubmit}>
              <Block row space="around">
                <Text size={20} color="white">
                  Send
                </Text>
                <Icon name="chevron-right" family="Entypo" size={20} color="white" />
              </Block>
            </TouchableOpacity>
          </Block>
          <Block style={styles.card}>
            <Block middle style={styles.space}>
              <Icon name="location" family="Entypo" size={25} />
              <Text>Primecabs, Delhi, India</Text>
            </Block>
            <Block middle style={styles.space}>
              <Icon name="phone" family="Entypo" size={25} />
              <Text>+1 234 567 7890 </Text>
              <Text> +1 234 567 7892</Text>
            </Block>
            <Block middle style={styles.space}>
              <Icon name="email" family="Entypo" size={25} />
              <Text>support@primecabs.com</Text>
              <Text>info@primecabs.com</Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: width - materialTheme.SIZES.BASE * 3,
  },
  card: {
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    width: width - materialTheme.SIZES.BASE * 3,
    padding: 10,
    margin: 10,
  },
  space: {
    marginTop: materialTheme.SIZES.BASE,
  },
  buttonBox: {
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    width: 150,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 10,
  },
});

export default Contact;
