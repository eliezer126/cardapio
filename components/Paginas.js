import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Bebidas from './Bebidas';
import Doces from './Doces';
import Pratos from './Pratos';
import Home from './Home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Bebidas" component={Bebidas}/>
        <Stack.Screen name="Pratos" component={Pratos}/>
        <Stack.Screen name="Doces" component={Doces}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}