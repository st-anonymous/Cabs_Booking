import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import {createStackNavigator} from '@react-navigation/stack';

export const App = () => {
  const Stack = createStackNavigator();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SheetProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {backgroundColor: 'white'},
            }}>
            {/* <Stack.Screen name={''} component={} /> */}
            {/* <Stack.Screen name={''} component={} /> */}
          </Stack.Navigator>
        </SheetProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
};
