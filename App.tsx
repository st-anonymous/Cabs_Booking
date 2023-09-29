import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {Typography} from './src/Components/Micro/Typography';
import {Button} from './src/Components/Micro/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PromoCard} from './src/Components/Macro/PromoCard';
import {Promotions} from './src/Screens/Promotions';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer>
          <SheetProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name={'Promotions'} component={Promotions} />
              {/* <Stack.Screen name={''} component={} /> */}
            </Stack.Navigator>
          </SheetProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
