import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/home/screen/home';
import HeroesScreen from './src/heroes/screen/heroes';
import AdventuresScreen from './src/adventures/screen/adventures';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
    </NavigationContainer>
  );
}

export default App;
