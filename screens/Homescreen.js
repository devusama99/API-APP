import React from "react";

// Importing React Navigation v5
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import UsersList from "../components/UsersList";
import BotttomTabsScreen from "./BotttomTabsScreen";
import { Title } from "native-base";

const Stack = createStackNavigator();
export default function Homescreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="BottomTabsScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Users" component={UsersList} />
        <Stack.Screen
          name="BottomTabsScreen"
          component={BotttomTabsScreen}
          options={{ title: "Options" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
