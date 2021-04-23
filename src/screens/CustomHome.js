import React, { Component } from "react";
import { Text, View } from "react-native";
import DropDownPicker from "react-native-custom-dropdown";
import Icon from "react-native-vector-icons/Feather";
import { fetchCity } from "../redux/actions/placeAction";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

class CustomHome extends Component {
  state = {
    country: "uk",
  };

  componentDidMount() {
    this.props.fetchCity();
  }

  render() {
    const { city } = this.props;

    let item = [];

    for (var i = 0; i < 3; i++) {
      item[i] = {
        name: "name" + i + 1,
        age: "age" + i + 1,
        hometown: "hometown" + i + 1,
      };
    }

    console.log(item.replace(/"(\w+)"\s*:/g, "$1:"));

    return (
      <SafeAreaView>
        <View>
          <DropDownPicker
            items={item}
            defaultValue={this.state.country}
            placeholder="from"
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: "#fafafa" }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            searchable={true}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.place.loading,
  city: state.place.city,
  search1: state.place.search1,
  search2: state.place.serac2,
});

export default connect(mapStateToProps, { fetchCity })(CustomHome);
