import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator()

const MainNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
    </Stack.Navigator>
)

const AppNavigation = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 4000)

    },[])

    if(isLoading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation