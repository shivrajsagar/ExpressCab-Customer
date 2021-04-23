import React, { Component } from "react";
import { StyleSheet, Dimensions, ScrollView, FlatList, Text } from "react-native";
import { Block, theme } from "galio-framework";

import { fetchCity } from "../redux/actions/placeAction";
import { fetchprice } from "../redux/actions/priceaction";
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

import StateSearch from "../components/StateSearch";
import CitySearch from "../components/CitySearch";

//const { DATA } = data;

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchCity();
  };

  componentDidUpdate() {
    this.props.fetchprice();
  }

  renderSearch = () => {
    const { navigation, item } = this.props;
    return (
      <>
        <StateSearch item={item} navigation={navigation} />
        <CitySearch item={item} navigation={navigation} />
      </>
    );
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    console.log(item);
    return <City item={item} navigation={navigation} />;
  };

  render() {
    const { data, loading, item, navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block safe center style={styles.home}>
          <StateSearch item={item} navigation={navigation} />
          <CitySearch item={item} navigation={navigation} />
          {/* {data ? <CitySearch item={item} navigation={navigation} /> : <Text>Pls Select your city to travel</Text>} */}
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
const mapStateToProps = (state) => ({
  loading: state.place.loading,
  data: state.place.data,
});

export default connect(mapStateToProps, { fetchCity, fetchprice })(Home);
