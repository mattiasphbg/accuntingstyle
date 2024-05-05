import "react-native-gesture-handler";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { Text } from "react-native";
import { useState, useEffect } from "react";

import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import "@tamagui/core/reset.css";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import * as Font from "expo-font";
import { HomeScreen } from "./src/components/homeScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    Inter: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: Inter_900Black,
  });
};
export default function App() {
  const [customFontsLoaded, setCustomFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setCustomFontsLoaded(true));
  }, []);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      {customFontsLoaded ? (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </TamaguiProvider>
  );
}
