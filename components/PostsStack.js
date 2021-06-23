import React from "react";

// Importing React Navigation v5
import { createStackNavigator } from "@react-navigation/stack";

// Import Components
import UserPosts from "./posts/UserPosts";
import UserPostComments from "./posts/UserPostComments";

const Stack = createStackNavigator();
export default function PostsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Posts" component={UserPosts} />
      <Stack.Screen name="Comments" component={UserPostComments} />
    </Stack.Navigator>
  );
}
