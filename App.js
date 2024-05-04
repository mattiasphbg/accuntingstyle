import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import "@tamagui/core/reset.css";
import { Button } from "tamagui";

import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
  });
};
export default function App() {
  const [customFontsLoaded, setCustomFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setCustomFontsLoaded(true));
  }, []);

  const loadInterFont = async () => {
    const font = await Font.loadAsync({
      Inter: require("./assets/fonts/Inter-Regular.ttf"),
    });
    return font;
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      {customFontsLoaded ? (
        <>
          <View className="flex-1 items-center justify-center bg-white">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Button>Hello</Button>
          </View>
        </>
      ) : (
        <Text>Loading fonts...</Text>
      )}
    </TamaguiProvider>
  );
}
