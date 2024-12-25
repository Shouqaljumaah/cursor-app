import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ItemsPage from "./tabs/ItemsPage";
import CreateItemPage from "./tabs/CreateItemPage";
import ProfilePage from "./tabs/ProfilePage";
import SettingsPage from "./tabs/SettingsPage";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const tabBarIcon = ({ focused, color, size, route }) => {
    let iconName;

    if (route.name === "Items") {
      iconName = focused ? "list" : "list-outline";
    } else if (route.name === "Create") {
      iconName = focused ? "add-circle" : "add-circle-outline";
    } else if (route.name === "Profile") {
      iconName = focused ? "person-outline" : "person-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "settings" : "settings-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => null,
        tabBarIcon: ({ focused, color, size }) => {
          return tabBarIcon({ focused, color, size, route });
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Items" component={ItemsPage} />
      <Tab.Screen name="Create" component={CreateItemPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
}
