import React from "react";
import { withNavigation } from "@react-navigation/compat";
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from "react-native";
import { Block, NavBar, Input, theme, Icon } from "galio-framework";

import { materialTheme } from "../constants";

const { height, width } = Dimensions.get("window");
const iPhoneX = () => Platform.OS === "ios" && (height === 812 || width === 812 || height === 896 || width === 896);

const SupportButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate("Help")}>
    <Icon family="FontAwesome5" size={30} name="headset" color="white" />
  </TouchableOpacity>
);

const SearchButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate("Pro")}>
    <Icon size={16} family="entypo" name="magnifying-glass" color={theme.COLORS[isWhite ? "WHITE" : "ICON"]} />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;

    if (title === "Title") {
      return [<SupportButton key="basket-title" navigation={navigation} isWhite={white} />];
    }
    switch (title) {
      case "Home":
        return [<SupportButton key="basket-home" navigation={navigation} isWhite={white} />];
      case "About us":
        return [<SupportButton key="basket-search" navigation={navigation} isWhite={white} />];
      case "Services":
        return [<SupportButton key="basket-categories" navigation={navigation} isWhite={white} />];
      case "Routes":
        return [<SupportButton key="basket-categories" navigation={navigation} isWhite={white} />];
      case "Fare":
        return [<SupportButton key="basket-categories" navigation={navigation} isWhite={white} />];
      case "Book a cab":
        return [<SupportButton key="basket-categories" navigation={navigation} isWhite={white} />];
      case "Myrides":
        return [<SupportButton key="basket-categories" navigation={navigation} isWhite={white} />];
      case "Profile":
        return [<SupportButton key="basket-deals" navigation={navigation} isWhite={white} />];
      case "Contact":
        return [<SupportButton key="basket-product" navigation={navigation} isWhite={white} />];
      case "Help":
        return [<SupportButton key="basket-search" navigation={navigation} isWhite={white} />];
      default:
        break;
    }
  };

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate("Pro")}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="magnifying-glass" family="entypo" />}
      />
    );
  };

  renderTabs = () => {
    const { navigation } = this.props;
    return null;
  };

  renderHeader = () => {
    const { search, tab } = this.props;
    if (search || tab) {
      return (
        <Block middle center>
          {search ? this.renderSearch() : null}
          {tab ? this.renderTabs() : null}
        </Block>
      );
    }
    return null;
  };

  render() {
    const { back, title, white, transparent } = this.props;
    // const { routeName } = navigation.state;
    const noShadow = ["Search", "Categories", "Deals", "Pro", "Profile"].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: "rgba(17,34,49,0)" } : null,
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          transparent={transparent}
          left={
            <TouchableOpacity onPress={this.handleLeftPress}>
              <Icon name="menu" family="Entyo" color="white" size={25} />
            </TouchableOpacity>
          }
          right={this.renderRight()}
          rightStyle={{ alignItems: "center", color: "white" }}
          leftStyle={{ flex: 0.3, paddingTop: 2 }}
          //leftIconName={back ? "chevron-left" : "navicon"}
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          titleStyle={[styles.title, { color: "white" }]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
    backgroundColor: "#112231",
    justifyContent: "center",
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },

  header: {
    backgroundColor: theme.COLORS.WHITE,
    justifyContent: "center",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
});
