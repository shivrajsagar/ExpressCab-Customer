// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect, useRef } from "react";
import { materialTheme } from "../constants";
import { Input, theme } from "galio-framework";

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions } from "react-native";

import { fetchCity } from "../redux/actions/placeAction";
import { fetchprice } from "../redux/actions/priceaction";
import { connect } from "react-redux";
import City from "../components/City";

const { width } = Dimensions.get("screen");

const CitySearch = ({ navigation, item, data }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetchprice();
    ref.current?.setAddressText("Some Text");
  }, [searchFilterFunction, search]);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.city_name || item.city_id ? item.city_name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setMasterDataSource(data);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return <City item={item} navigation={navigation} />;
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    return item.city_id ? setSearch(item.city_name) : "";
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Input
          style={styles.textInputStyle}
          placeholder="Search Destination"
          placeholderTextColor={materialTheme.COLORS.MUTED}
          color="black"
          minLength={3}
          clearButtonMode="always"
          right
          value={search}
          autoCorrect={false}
          onChangeText={(text) => searchFilterFunction(text)}
          icon="magnifying-glass"
          family="Entypo"
          iconSize={24}
          iconColor="gray"
          ref={ref}
        />
        {search ? (
          <FlatList
            data={filteredDataSource && filteredDataSource.length > 0 ? filteredDataSource : data}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            //extraData={() => <Text>{item.index}</Text>}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    marginBottom: -10,
    height: 48,
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 3,
    borderColor: materialTheme.COLORS.BACKGROUND,
    // borderLeftColor: materialTheme.COLORS.BACKGROUND,
    // borderRightColor: materialTheme.COLORS.BACKGROUND,
    // borderTopColor: materialTheme.COLORS.BACKGROUND,
  },
});

const mapStateToProps = (state) => ({
  loading: state.price.loading,
  data: state.price.pricedata,
});

export default connect(mapStateToProps, { fetchprice })(CitySearch);
