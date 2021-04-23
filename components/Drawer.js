import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;
    switch (title) {
      case "Home":
        return <Icon size={22} name="home" family="entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Profile":
        return <Icon size={22} name="man" family="entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "My Rides":
        return (
          <Icon size={22} name="linechart" family="AntDesign" color={focused ? "white" : materialTheme.COLORS.MUTED} />
        );
      case "Routes":
        return <Icon size={22} name="flag" family="Entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Fare":
        return <Icon size={22} name="ticket" family="Entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "About us":
        return <Icon size={22} name="book" family="entypo" color={focused ? "white" : materialTheme.COLORS.MUTED} />;
      case "Help":
        return (
          <Icon
            size={22}
            name="help-with-circle"
            family="Entypo"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );

      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    return (
      <TouchableOpacity
        style={{ height: 55 }}
        onPress={() => {
          navigation.navigate(title);
        }}
      >
        <Block flex row style={[styles.defaultStyle, focused ? [styles.activeStyle, styles.shadow] : null]}>
          <Block middle flex={0.1} style={{ marginRight: 28 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text size={18} color={focused ? "white" : "black"}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.BUTTON_COLOR,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
});
