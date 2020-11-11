import React from 'react'
import { View, Text, Image, StatusBar, ScrollView } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import AppIntroSlider from 'react-native-app-intro-slider'
import AsyncStorage from '@react-native-async-storage/async-storage'

const data = [
    {
        id: 1,
        image: require('../assets/images/donald.png'),
        description: 'Permudah hidupmu dengan Jaya Apps'
    },
    {
        id: 2,
        image: require('../assets/images/flash.png'),
        description: 'Daftar segera!'
    },
    {
        id: 3,
        image: require('../assets/images/saitama.png'),
        description: 'Sebelum terlambat!'
    }
]

const Intro = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.listContent}>
                    <Image source={item.image} style={styles.imgList} resizeMethod="auto" resizeMode="contain" />
                </View>
                <Text style={styles.textList}>{item.description}</Text>
            </View>
        )
    }

    const done = async () => {
        navigation.replace('Login')
        await AsyncStorage.setItem("skip", 'true')
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <View style={styles.textLogoContainer}>
                    <Text style={styles.textLogo}>Jaya Apps</Text>
                </View>
                <View style={styles.slider}>
                    <AppIntroSlider
                        data={data} 
                        renderItem={renderItem}
                        renderNextButton={() => null}
                        renderDoneButton={() => null}
                        activeDotStyle={styles.activeDotStyle}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btnLogin} onPress={done} >
                        <Text style={styles.btnTextLogin}>MASUK</Text>
                    </Button>
                    <Button style={styles.btnRegister}>
                        <Text style={styles.btnTextRegister}>DAFTAR</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default Intro