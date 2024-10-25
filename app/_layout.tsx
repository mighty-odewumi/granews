import React, { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { Provider } from "react-redux";
import { store } from "../store";
import { loadBookmarks } from '@/store/bookmarkSlice';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "RobotoMedium": require('../assets/fonts/Roboto/RobotoMedium.ttf'),
    "RobotoLight": require('../assets/fonts/Roboto/RobotoLight.ttf'),
    "RobotoRegular": require('../assets/fonts/Roboto/RobotoRegular.ttf'),
    "RobotoBold": require('../assets/fonts/Roboto/RobotoBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    store.dispatch(loadBookmarks());
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}></ThemeProvider>      */}
      <Provider store={store}>
        <Stack> 
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
      </Provider>
    </>
  );
}
