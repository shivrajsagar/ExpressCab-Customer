import React, { Component } from "react";
import { Platform, StatusBar } from "react-native";
import { Block, GalioProvider } from "galio-framework";

import { materialTheme } from "./constants/";

import { NavigationContainer } from "@react-navigation/native";
import Screens from "./navigation/Screens";
import { navigationRef } from "./navigation/RootNavigation";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <GalioProvider theme={materialTheme}>
            <Block flex>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>
      </Provider>
    );
  }
}
