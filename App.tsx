import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {registerSheet} from 'react-native-actions-sheet';
import {Promotions} from './src/Screens/Promotions';
import {Booking} from './src/Screens/Booking';
import {BookingDate} from './src/Sheets/BookingDate';

const App = () => {
  const Stack = createNativeStackNavigator();

  registerSheet('BookingDate', BookingDate);

  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer>
          <SheetProvider>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name={'Booking'} component={Booking} />
              <Stack.Screen name={'Promotions'} component={Promotions} />
            </Stack.Navigator>
          </SheetProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
