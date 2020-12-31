import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Block, Text } from "galio-framework";
import materialTheme from "../constants/Theme";
import { ScrollView } from "react-native-gesture-handler";

import { data } from "../constants";

const { ROUTES } = data;

class Routes extends Component {
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
          <Text center h5>
            Our Routes
          </Text>
          <Text center style={{ margin: 10 }}>
            Express Cab provides one side taxi from one city to another. We provide Instant
            Confirmation on below mentioned routes. Why pay for return fare if you are traveling one
            side only?
          </Text>
          <Block flex style={styles.list}>
            <FlatList data={ROUTES} renderItem={this.renderItem} keyExtractor={(item) => item.id} />
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

export default Routes;
