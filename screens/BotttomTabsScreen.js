import React from "react";
import { Container, Text } from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// Importing From Components
import UserDetail from "../components/details/UserDetail";
import AlbumsStack from "../components/AlbumsStack";
import PostsStack from "../components/PostsStack";
import UserTodos from "../components/todos/UserTodos";

// Importing Material BottomTab
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();
export default function BottomTabsScreen() {
  return (
    <Tab.Navigator
      backBehavior="none"
      activeColor="#fff"
      inactiveColor="#d6d6d6"
      barStyle={{ backgroundColor: "#0066D5" }}
    >
      <Tab.Screen
        name="Details"
        component={UserDetail}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#fff"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#d6d6d6"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="albums" size={24} color="#fff" />
            ) : (
              <Ionicons name="albums" size={24} color="#d6d6d6" />
            ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="post" size={24} color="#fff" />
            ) : (
              <MaterialCommunityIcons name="post" size={24} color="#d6d6d6" />
            ),
        }}
      />
      <Tab.Screen
        name="Todos"
        component={UserTodos}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="clipboard-list"
                size={24}
                color="#fff"
              />
            ) : (
              <MaterialCommunityIcons
                name="clipboard-list"
                size={24}
                color="#d6d6d6"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
