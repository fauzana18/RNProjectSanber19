import React from 'react'
import { View, Text, Image, StatusBar, SafeAreaView } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
//import module  react native app intro slider
import AppIntroSlider from 'react-native-app-intro-slider'

// data yang akan kita tampilkan sebagai onboarding aplikasi
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

    //tampilan onboarding yang ditampilkan dalam renderItem
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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <View style={styles.textLogoContainer}>
                    <Text style={styles.textLogo}>Jaya Apps</Text>
                </View>
                <View style={styles.slider}>
                    {/* contoh menggunakan component react native app intro slider */}
                    <AppIntroSlider
                        data={data} //masukan data yang akan ditampilkan menjadi onBoarding, dia bernilai array
                        renderItem={renderItem} // untuk menampilkan onBoarding dar data array
                        renderNextButton={() => null}
                        renderDoneButton={() => null}
                        activeDotStyle={styles.activeDotStyle}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btnLogin}>
                        <Text style={styles.btnTextLogin}>Masuk sini kalo dah punya akun</Text>
                    </Button>
                    <Button style={styles.btnRegister}>
                        <Text style={styles.btnTextRegister}>Daftar dulu lah kalo belom punya akun</Text>
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Intro