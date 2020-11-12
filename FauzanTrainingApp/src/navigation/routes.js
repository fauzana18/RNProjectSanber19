import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

const MainNavigation = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={props.initial}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
)

const AppNavigation = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [initial, setInitial] = useState('Intro')

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 4000)
        setRoute()
    },[])

    const setRoute = async () => {
        try{
            const token = await AsyncStorage.getItem("token")
            const googleToken = await AsyncStorage.getItem("googleToken")
            const fingerprint = await AsyncStorage.getItem("fingerprint")
            const skip = await AsyncStorage.getItem("skip")
            if(token || googleToken || fingerprint){
                setInitial('Profile')
            }
            else if(skip == 'true'){
                setInitial('Login')
            }
        } catch (err) {
            console.log(err)
        }
    }

    if(isLoading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <MainNavigation initial={initial} />
        </NavigationContainer>
    )
}

export default AppNavigation