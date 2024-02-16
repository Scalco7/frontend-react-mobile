import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/home/screen/home';
import HeroesScreen from './src/heroes/screen/heroes';
import AdventuresScreen from './src/adventures/screen/adventures';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Heroes"
            component={HeroesScreen}
          />
          <Stack.Screen
            name="Adventures"
            component={AdventuresScreen}
          />
        </Stack.Navigator>
        <HomeScreen></HomeScreen>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
