import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";
import materialTheme from "../constants/Theme";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const DATA = [
  {
    id: 1,
    title: "Express Cab Taxi From Ahmedabad (Gujarat)",
    city: [
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
      {
        location: "Ahmedabad to Anand",
      },
    ],
  },
];

class Fare extends Component {
  renderItem = ({ item }) => {
    return (
      <Block style={styles.card}>
        <Text size={18} color={materialTheme.COLORS.ERROR}>
          {item.title}
        </Text>
        <Block style={styles.border}>
          <FlatList
            data={item.city}
            numColumns={2}
            renderItem={({ item }) => (
              <Block style={styles.subcard}>
                <Text style={styles.listView}>{item.location}</Text>
              </Block>
            )}
            keyExtractor={(item, index) => "key" + index}
            ItemSeparatorComponent={() => <Block style={styles.separator} />}
          />
        </Block>
      </Block>
    );
  };
  render() {
    return (
      <Block style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text center color={materialTheme.COLORS.HEADING} h5>
            Fare Calculation
          </Text>
          <Block flex style={styles.list}>
            <FlatList data={DATA} renderItem={this.renderItem} keyExtractor={(item) => item.id} />
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 10,
  },
  card: {
    margin: 10,
    justifyContent: "center",
    borderColor: "gray",
  },
  border: {
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: "gray",
    marginTop: 7,
  },
  subcard: {
    flex: 1,
    justifyContent: "center",
    height: 40,
    margin: 2,
    backgroundColor: "white",
  },
  listView: {
    fontSize: 13,
    justifyContent: "center",
    padding: 6,
  },
});

export default Fare;
