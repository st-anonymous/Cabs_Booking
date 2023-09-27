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
      <GestureHandlerRootView style={{flex: 1}}>
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
        <View>
          <Typography
            text={`Welcome to Tony's company`}
            size={'extra-large'}
            bgColor="#E5CFF7"
          />
        </View>
        <Button
          text={'Continue'}
          size={'small'}
          onClick={() => console.log('Clicked')}
        />
        <PromoCard
          data={{
            header: 'get upto 25% off',
            promoCode: 'ABCDE',
            validity: new Date(2023, 9, 27),
            terms: ['Nothing', 'here', 'is'],
            onClick: () => {
              console.log('Aaarha yaha');
            },
          }}
        />
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
