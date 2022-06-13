import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroList from './HeroList';
import HeroDetails from '../components/HeroDetails';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HeroList} options={{title:'', headerTransparent: true, headerShown:false}} />
        <Stack.Screen name='Details' component={HeroDetails} options={{title:'', headerTransparent: true, headerTintColor:'seashell', headerBackTitle:''}} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default Navigation;
