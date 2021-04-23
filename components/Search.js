import React, { useState, useEffect } from "react";
import { materialTheme } from "../constants";
import { Input, theme } from "galio-framework";
import { SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}
        {". "}
        {item.title.toUpperCase()}
      </Text>
    );
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Input
          style={styles.textInputStyle}
          placeholder="Search State"
          placeholderTextColor={materialTheme.COLORS.MUTED}
          color="black"
          clearButtonMode="always"
          right
          value={search}
          autoCorrect={false}
          onChangeText={(text) => searchFilterFunction(text)}
          icon="magnifying-glass"
          family="Entypo"
          iconSize={24}
          iconColor="gray"
        />
        {search ? (
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        ) : null}
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
    height: 48,
    width: width - theme.SIZES.BASE * 2,
    borderRadius: 3,
  },
});

export default Search;
