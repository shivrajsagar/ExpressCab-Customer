import React, { Component } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { fetchState, fetchPrice } from "../redux/actions/placeAction";
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

import StateSearch from "../components/StateSearch";
import CitySearch from "../components/CitySearch";

//const { DATA } = data;

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchState();
  };

  componentDidUpdate() {
    const { cityid } = this.props;
    this.props.fetchPrice(cityid);
  }

  render() {
    const { item, navigation } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block safe center style={styles.home}>
          <StateSearch item={item} navigation={navigation} />
          <CitySearch item={item} navigation={navigation} />
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
  cityid: state.place.cityid,
  state: state.place.statedata,
  city: state.place.city,
  price: state.place.price,
});

export default connect(mapStateToProps, { fetchState, fetchPrice })(Home);
