import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Page from './Page';
import ContentPage from './ContentPage';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="ContentPage" component={ContentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
