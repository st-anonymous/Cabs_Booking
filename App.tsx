import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {Typography} from './src/Components/Micro/Typography';
import {Button} from './src/Components/Micro/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PromoCard} from './src/Components/Macro/PromoCard';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <NavigationContainer>
        <SheetProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {backgroundColor: 'white'},
            }}>
            <Stack.Screen name={''} component={} />
            <Stack.Screen name={''} component={} />
          </Stack.Navigator>
        </SheetProvider>
      </NavigationContainer> */}
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
