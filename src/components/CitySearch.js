import React, { useState, useEffect, useRef } from "react";
import { materialTheme } from "../constants";
import { Input, theme } from "galio-framework";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Text,
} from "react-native";

import { fetchPrice } from "../redux/actions/placeAction";
import { connect } from "react-redux";
import City from "../components/City";

const { width } = Dimensions.get("screen");

const CitySearch = ({ navigation, item, price, message, cityid }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetchPrice(cityid);
    ref.current?.setAddressText("Some Text");
  }, [searchFilterFunction, search]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData =
          item.city_name || item.city_id
            ? item.city_name.toUpperCase()
            : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setMasterDataSource(price);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return <City item={item} navigation={navigation} />;
  };

  const ItemSeparatorView = () => {
    return (
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
    return item.city_id ? setSearch(item.city_name) : "";
  };

  // console.log(message, cityid);

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
            data={
              filteredDataSource && filteredDataSource.length > 0
                ? filteredDataSource
                : price
            }
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            // ListEmptyComponent={() => (
            //   <View>
            //     <Text>noida</Text>
            //   </View>
            // )}
          />
        ) : (
          <FlatList
            data={price}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            ListEmptyComponent={() => (
              <View style={{ backgroundColor: "#eeee", marginTop: 2 }}>
                <Text
                  style={{
                    marginTop: 100,
                    alignSelf: "center",
                    color: "#000",
                    fontWeight: "600",
                    fontSize: 20,
                  }}
                >
                  No City Available Here
                </Text>
              </View>
            )}
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
  },
});

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  price: state.place.price,
  message: state.place.message,
  cityid: state.place.cityid,
});

export default connect(mapStateToProps, { fetchPrice })(CitySearch);
