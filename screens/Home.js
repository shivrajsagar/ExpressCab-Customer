import React, { Component } from "react";
import { StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import { Block, Input, theme } from "galio-framework";

import { City } from "../components/";

const { width } = Dimensions.get("screen");
import { data, materialTheme } from "../constants";

const { DATA } = data;

class Home extends Component {
  renderSearch = () => {
    return (
      <Input
        style={styles.search}
        placeholder="Search Destination?"
        placeholderTextColor={materialTheme.COLORS.MUTED}
        color="black"
        right
        icon="magnifying-glass"
        family="Entypo"
        iconSize={24}
        iconColor="gray"
      />
    );
  };

  renderItem = ({ item }) => {
    return <City item={item} />;
  };

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block safe center style={styles.home}>
          {this.renderSearch()}
          <Block style={styles.city}>
            <FlatList
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => "key" + index}
              showsVerticalScrollIndicator={false}
              initialNumToRender={2}
              maxToRenderPerBatch={2}
              removeClippedSubviews={true}
              scrollEventThrottle={16}
            />
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
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
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  city: {
    width: width - theme.SIZES.BASE * 2,
    paddingTop: 0,
  },
});

export default Home;
