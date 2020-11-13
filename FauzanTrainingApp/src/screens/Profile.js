import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import { main, user } from '../api/api'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import { GoogleSignin } from '@react-native-community/google-signin'

const Profile = ({navigation}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState()
    const [userToken, setUserToken] = useState('')
    const [googleToken, setGoogleToken] = useState('')

    useEffect( () => {
        getToken()
        getDataGoogle()
        configureGoogleSignIn()
        fingerprintCheck()
    }, [])

    const getToken = async () => {
        try{
            const token = await AsyncStorage.getItem("token")
            setUserToken(token)
            return getData(token)
        } catch (err) {
            console.log(err)
        }
    }

    const fingerprintCheck = async () => {
        try{
            const check = await AsyncStorage.getItem("fingerprint")
            if(check){
                setName("Ojan")
                setImage(require('../assets/images/foto.png'))
            }
        } catch(err) {
            console.log(err)
        }
    }

    const getData = (token) => {
        Axios.get(`${user}`, {
            timeout: 5000,
            headers: {
                'Authorization' : 'Bearer' + token
            }
        })
        .then((res) => {
            setName(res.data.data.profile.name)
            setImage({uri: `${main}${res.data.data.profile.photo}`+ '?' + new Date(), cache: 'reload', headers: {Pragma: 'no-cache' }})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '663509028506-hgnqchhqvsbmn8i1mgldkudfr6frse4n.apps.googleusercontent.com'
        })
    }

    const getDataGoogle = async () => {
        const googleToken = await AsyncStorage.getItem("googleToken")
        setGoogleToken(googleToken)
        if(googleToken){
            const userinfo = await GoogleSignin.signInSilently()
            setImage({uri: userinfo && userinfo.user && userinfo.user.photo})
            setName(userinfo.user.name)
        }
    }

    const confirmation = () => {
        Alert.alert(
            "Keluar",
            "Apakah anda yakin?",
            [
                { 
                    text: "Ya",
                    onPress: ()=>logout()
                  },
                  {
                    text: "Tidak",
                    style: "cancel"
                  },
            ],
            { cancelable: true }
        )
    }

    const logout = async () => {
        try{
            if(userToken){
                await AsyncStorage.removeItem('token')
            }
            else if(googleToken){
                await GoogleSignin.revokeAccess()
                await GoogleSignin.signOut()
                await AsyncStorage.removeItem('googleToken')
            }
            else{
                await AsyncStorage.removeItem('fingerprint')
            }
            
            navigation.replace('Login')
        } catch (err) {
            console.log(err)
        }
    }

    const editData = () => {
        if(userToken){
            navigation.push('Edit')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} />
                <Text style={styles.headerText}>Akun Saya</Text>

                <View style={styles.body}>
                    <View style={styles.topBox}>
                        <Button style={styles.nameBox} onPress={() => editData() } >
                            <Image style={styles.image} source={ image } />
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

                    <Button style={styles.menuBox} onPress={() => confirmation()} >
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