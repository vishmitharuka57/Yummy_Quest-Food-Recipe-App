import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen'; 

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator;

