import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

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

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}></ThemeProvider>      */}
      <ThemeProvider value={DefaultTheme}>
        <Stack> 
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
      </ThemeProvider>
    </>
  );
}
