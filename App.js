import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import "@tamagui/core/reset.css";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

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

  function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      {customFontsLoaded ? (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </TamaguiProvider>
  );
}
