import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, TextInput, FlatList } from "react-native";

// redux
import { fetchCity } from "../redux/actions/placeAction";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

const Example = ({ fetchCity, city }) => {
  const [value, setVlaue] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCity();
  }, []);

  const onSearch = () => {
    console.log("ssearch");
    setShow(true);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => [setShow(false), setVlaue(item.city_name)]}>
        <View>
          <Text>{item.city_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Example</Text>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="white"
          value={value}
          onChangeText={onSearch}
          style={{
            backgroundColor: "green",
            color: "white",
            height: 50,
          }}
        />
        {show && <FlatList data={city} renderItem={renderItem} />}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  city: state.place.city,
});

export default connect(mapStateToProps, { fetchCity })(Example);
