import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen'; 
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator;

