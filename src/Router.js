import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    Sound,
    Home,
    SplashScreen,
} from './screen';

const Stack = createStackNavigator();
function Router() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{
                headerShown: false,

            }} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{
            headerShown: false,

        }} name="Home" component={Home} />
        <Stack.Screen options={{
            headerShown: false,

        }} name="Sound" component={Sound} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}



export default Router;

