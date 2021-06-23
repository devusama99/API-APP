import React from "react";

// Importing React Navigation v5
import { createStackNavigator } from "@react-navigation/stack";

// Import Components
import UserAlbums from "./albums/UserAlbums";
import UserAlbumPhotos from "./albums/UserAlbumPhotos";

const Stack = createStackNavigator();
export default function AlbumsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Albums" component={UserAlbums} />
      <Stack.Screen name="Details" component={UserAlbumPhotos} />
    </Stack.Navigator>
  );
}
