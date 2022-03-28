import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import ProductList from '../screens/ProductList';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} />
            <Stack.Screen 
                name="ProductList" 
                component={ProductList} />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes