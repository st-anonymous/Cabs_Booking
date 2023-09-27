import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {Typography} from './src/Components/Typography';
import {Button} from './src/Components/Button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
          <Typography text={`Welcome to Tony's company`} size={'extra-large'} />
        </View>
        <Button
          text={'Click Me'}
          size={'small'}
          onClick={() => console.log('Clicked')}
        />
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;
