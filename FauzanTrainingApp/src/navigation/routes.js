import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Edit from '../screens/Edit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import Password from '../screens/Password';

const Stack = createStackNavigator()

const MainNavigation = (props) => (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={props.initial}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Password" component={Password} />
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