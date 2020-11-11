import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import { main, user } from '../api/api'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'

const Profile = ({navigation}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState()

    useEffect( () => {
        getToken()
    }, [])

    const getToken = async () => {
        try{
            const token = await AsyncStorage.getItem("token")
            return getVenue(token)
        } catch (err) {
            console.log(err)
        }
    }

    const getVenue = (token) => {
        Axios.get(`${user}`, {
            timeout: 2000,
            headers: {
                'Authorization' : 'Bearer' + token
            }
        })
        .then((res) => {
            setName(res.data.data.profile.name)
            setImage({uri: `${main}${res.data.data.profile.photo}`})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const logout = async () => {
        try{
            await AsyncStorage.removeItem('token')
            navigation.replace('Login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} />
                <Text style={styles.headerText}>Akun Saya</Text>

                <View style={styles.body}>
                    <View style={styles.topBox}>
                        <Button style={styles.nameBox}>
                            <Image style={styles.image} source={image} />
                            <Text style={styles.name}> {name} </Text>
                        </Button>

                        <Button style={styles.menuBox}>
                            <View style={styles.box1}>
                                <Icon style={styles.icon} name="wallet-outline" size={40}/>
                                <Text style={styles.text}>Saldo</Text>
                            </View>
                            <Text style={[styles.text, {marginRight: 20}]}>Rp. 120.000.000</Text>
                        </Button>
                    </View>

                    <Button style={styles.menuBox}>
                        <View style={styles.box1}>
                            <Icon style={styles.icon} name="settings-outline" size={40}/>
                            <Text style={styles.text}>Pengaturan</Text>
                        </View>
                    </Button>

                    <Button style={styles.menuBox}>
                        <View style={styles.box1}>
                            <Icon style={styles.icon} name="help-circle-outline" size={40}/>
                            <Text style={styles.text}>Bantuan</Text>
                        </View>
                    </Button>

                    <Button style={styles.menuBox}>
                        <View style={styles.box1}>
                            <Icon style={styles.icon} name="document-text-outline" size={40}/>
                            <Text style={styles.text}>Syarat & Ketentuan</Text>
                        </View>
                    </Button>

                    <Button style={styles.menuBox} onPress={() => logout()} >
                        <View style={styles.box1}>
                            <Icon style={styles.icon} name="exit-outline" size={40}/>
                            <Text style={styles.text}>Keluar</Text>
                        </View>
                    </Button>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default Profile