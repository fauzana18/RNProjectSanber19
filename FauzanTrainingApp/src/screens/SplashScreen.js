import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, StatusBar, Animated, Dimensions, SafeAreaView } from 'react-native'
//import styles from '../styles/style'
import colors from '../styles/colors'

const height = Dimensions.get('window').height

const Splashscreens = () => {

    const fadeOut = useRef(new Animated.Value(1)).current
    const fadeIn = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeOut, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        }).start()
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start()
    }, [fadeOut, fadeIn])

    const transformY = fadeIn.interpolate({
        inputRange: [0, 1],
        outputRange: [height, -height / 2]
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Animated.View style={[styles.quotesContainer, { opacity: fadeOut }]}>
                    <Text style={styles.quotes}>Lancar Jaya</Text>
                </Animated.View>
                <Animated.View style={[styles.logo, { opacity: fadeIn, transform: [{ translateY: transformY }] }]}>
                    <Text style={styles.textLogo}>Jaya Apps</Text>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlack
    },
    quotesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quotes: {
        fontSize: 14,
        color: colors.lightGrey
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.lightGrey
    }
})

export default Splashscreens