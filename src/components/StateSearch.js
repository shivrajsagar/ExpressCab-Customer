import React, { useEffect, useState } from "react";
import { materialTheme } from "../constants";
import { Input, theme } from "galio-framework";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import { fetchState, cityidUpdate } from "../redux/actions/placeAction";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const StateSearch = ({ navigation, data, cityid, cityidUpdate }) => {
  const [search, setSearch] = useState("Ahmedabad");
  const [show, setShow] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData =
          item.city_name && item.city_id
            ? item.city_name.toUpperCase()
            : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setMasterDataSource(data);
      setSearch(text);
      setShow(true);
    }
  };

  const ItemView = ({ item }) => {
    const { navigate } = navigation;
    return (
      <TouchableOpacity
        onPress={() => [
          setShow(false),
          getItem(item),
          cityidUpdate(item.city_id),
        ]}
      >
        <Text style={styles.itemStyle}>
          {item.city_name} {item.state_name}
        </Text>
      </TouchableOpacity>
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

  const getItem = (item) => {
    global.FROMCITY = item.city_name;
    return (
      <View>
        <Text>{setSearch(item.city_name + " " + item.state_name)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Input
          style={styles.textInputStyle}
          placeholder="Enter City Name"
          placeholderTextColor={materialTheme.COLORS.MUTED}
          color="black"
          right
          clearButtonMode="always"
          value={search}
          onPress={() => navigation.navigate("Car List")}
          autoCorrect={false}
          onChangeText={(text) => searchFilterFunction(text)}
          isClearable={false}
          icon="magnifying-glass"
          setFilteredDataSource={ItemView}
          family="Entypo"
          resetValue={true}
          iconSize={24}
          iconColor="gray"
        />

        {search
          ? show && (
              <FlatList
                data={
                  filteredDataSource && filteredDataSource.length > 0
                    ? filteredDataSource
                    : data
                }
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            )
          : null}
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
    borderColor: materialTheme.COLORS.BACKGROUND,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  loading: state.place.loading,
  data: state.place.statedata,
  cityid: state.place.cityid,
});

export default connect(mapStateToProps, { fetchState, cityidUpdate })(
  StateSearch
);
