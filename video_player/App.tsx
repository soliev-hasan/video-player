import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StackScreenProps} from './src/module/app/app-navigation.type';
import {Autorization} from './src/module/autorization/autorization.componentent';
import HomeScreen from './src/module/home/home-screen.component';
import {ListVideo} from './src/module/list-video/list-video.component';
import {VideoPlayer} from './src/module/video/video.component';

const Stack = createNativeStackNavigator<StackScreenProps>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Autorization'}
        screenOptions={{gestureEnabled: false, headerShown: false}}>
        <Stack.Screen name="Autorization" component={Autorization} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListVideo} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
