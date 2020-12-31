import React from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//components
import { Header, Icon } from "../components";
import CustomDrawerContent from "./Menu";
//constants
import { materialTheme } from "../constants";

// screens
import HomeScreen from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Hourly from "../screens/Hourly";
import OutStation from "../screens/OutStation";
import Routes from "../screens/Routes";
import Fare from "../screens/Fare";
import About from "../screens/About";
import Help from "../screens/Help";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();

const profile = {
  name: "User",
};

//dimensiomns
const { width, height } = Dimensions.get("screen");

function HomeStack1() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Outstation"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Home" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function HourlyStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Outstation"
        component={Hourly}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Hourly" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function OutStationStack() {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Outstation"
        component={OutStation}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Outstation" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Bottom.Navigator
      mode="card"
      headerMode="screen"
      tabBarOptions={{
        activeTintColor: materialTheme.COLORS.BUTTON_COLOR,
        inactiveTintColor: "white",
        style: {
          backgroundColor: materialTheme.COLORS.BACKGROUND,
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeStack1}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Icon name="home" family="Entypo" color={color} size={20} />,
        }}
      />
      <Bottom.Screen
        name="Hourly"
        component={HourlyStack}
        options={{
          tabBarLabel: "Hourly",
          tabBarIcon: ({ color }) => <Icon name="location-pin" family="Entypo" color={color} size={20} />,
        }}
      />
      <Bottom.Screen
        name="Outstation"
        component={OutStationStack}
        options={{
          tabBarLabel: "Outstation",
          tabBarIcon: ({ color }) => <Icon name="car" family="AntDesign" color={color} size={20} />,
        }}
      />
    </Bottom.Navigator>
  );
}

function ProfileStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Profile" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function RouteStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Routes}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Routes" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function FareStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fare"
        component={Fare}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Fare" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function AboutStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="About us" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function HelpStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          header: ({ navigation, scene }) => <Header tabs title="Help" navigation={navigation} scene={scene} />,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} profile={profile} />}
      drawerStyle={{ backgroundColor: "white", width: width * 0.8 }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "grey",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => <Icon name="cab" family="GalioExtra" color={focused} />,
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Myrides" component={ProfileStack} />
      <Drawer.Screen name="Routes" component={RouteStack} />
      <Drawer.Screen name="Fare" component={FareStack} />
      <Drawer.Screen name="About us" component={AboutStack} />
      <Drawer.Screen name="Help" component={HelpStack} />
    </Drawer.Navigator>
  );
}

function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerTransparent: true }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
