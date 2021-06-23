import React from "react";
import { useEffect } from "react";

import * as Font from "expo-font";

// Importing Main Screen
import Homescreen from "./screens/Homescreen";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = function () {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  };
  return <Homescreen />;
}
