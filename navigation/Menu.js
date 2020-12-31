import React from "react";
import {
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Drawer as DrawerCustomItem } from "../components/";
import { materialTheme } from "../constants/";

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeAreaInsets();
  const screens = [
    "Home",
    "Profile",
    "My rides",
    "Routes",
    "Fare",
    "About us",
    "Help",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <Block style={styles.profile}>
            <Text h5 color={"white"}>
              {profile.name}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: materialTheme.COLORS.PRIMARY,
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "center",
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end",
  },
  profile: {
    marginBottom: theme.SIZES.BASE,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },

  seller: {
    marginRight: 16,
  },
});

export default CustomDrawerContent;
