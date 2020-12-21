import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import TurkeyCasesScreen from '../screens/turkeyCasesScreen';
import WorldCasesScreen from '../screens/worldCasesScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: '', headerShown: false }}
          />
          <Stack.Screen 
            name="Turkey" 
            component={TurkeyCasesScreen} 
            options={{ title: 'Turkey Cases' }}/>
          <Stack.Screen 
            name="World" 
            component={WorldCasesScreen} 
            options={{ title: 'World Cases' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigation;