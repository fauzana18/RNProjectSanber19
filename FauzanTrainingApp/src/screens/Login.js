import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput, StatusBar, Alert } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import Axios from 'axios'
import { auth } from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FireBaseAuth from '@react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TouchID from 'react-native-touch-id'
import Icon2 from 'react-native-vector-icons/Feather'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(true)
    const [icon, setIcon] = useState('eye-off')

    useEffect(() => {
        configureGoogleSignIn()
    }, [])

    const saveToken = async (token) => {
        try{
            await AsyncStorage.setItem("token", token)
        } catch (err) {
            console.log(err)
        }
    }

    const saveGoogleToken = async (token) => {
        try{
            await AsyncStorage.setItem("googleToken", token)
        } catch (err) {
            console.log(err)
        }
    }

    const fingerprintStat = async () => {
        try{
            await AsyncStorage.setItem("fingerprint", "Exist")
        } catch (err) {
            console.log(err)
        }
    }

    const message = (title, content) => {
        Alert.alert(
            `${title}`,
            `${content}`,
            [
              { 
                text: "Ok"
              }
            ],
            { cancelable: true }
        )
    }

    const login = () => {
        if(email && password){
            let data = {
                email,
                password
            }
            Axios.post(`${auth}`, data, {
                timeout: 5000
            })
            .then((res) => {
                saveToken(res.data.data.token)
                navigation.replace('Profile')
            })
            .catch((err) => {
                message("Gagal Masuk", "Email atau password yang anda masukkan salah!")
            })
        }

        else{
            message("Gagal Masuk", "Email dan password tidak boleh kosong")
        }
    }

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: '663509028506-hgnqchhqvsbmn8i1mgldkudfr6frse4n.apps.googleusercontent.com'
        })
    }

    const signInWithGoogle = async () => {
        try{
            const { idToken } = await GoogleSignin.signIn()
            saveGoogleToken(idToken)

            const credential = FireBaseAuth.GoogleAuthProvider.credential(idToken)
            FireBaseAuth().signInWithCredential(credential)
            
            navigation.replace('Profile')
        } catch (err) {
            console.log(err)
        }
    }

    const fingerprintConfig = {
        title: 'Authentication Required',
        imageColor: colors.blue,
        imageErrorColor: colors.red,
        sensorDescription: 'Touch Sensor',
        sensorErrorDescription: 'Failed',
        cancelText: 'Cancel'
    }

    const signInWithFingerprint = () => {
        TouchID.authenticate('', fingerprintConfig)
        .then(success => {
            navigation.replace('Profile')
            fingerprintStat()
        })
        .catch(error => {
            message("Gagal Masuk", "Masuk dengan sidik jari gagal")
        })
    }

    const isVisible = () => {
        setVisible(!visible)
        if(icon == 'eye'){
            setIcon('eye-off')
        }
        else{
            setIcon('eye')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={"handled"} >
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Silakan Masuk</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Email'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setEmail(value)}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        value= {email}
                        disableFullscreenUI={true}
                        returnKeyType={'next'}
                        onSubmitEditing={() => { passwordInput.focus(); }}
                        blurOnSubmit={false}
                    />

                    <View style={styles.joinBox}>
                        <TextInput
                            style={styles.passwordInput} 
                            placeholder = 'Password'
                            placeholderTextColor={colors.grey}
                            onChangeText ={ value => setPassword(value)}
                            autoCapitalize={"none"}
                            value= {password}
                            secureTextEntry={visible}
                            disableFullscreenUI={true}
                            ref={input => { passwordInput = input }}
                            onSubmitEditing={() => login()}
                        />
                        <Button style={styles.eyeIcon} onPress={() => isVisible()}>
                            <Icon2 name={icon} size={20} style={styles.icon} />
                        </Button>
                    </View>

                    <Button style={styles.btnLogin2} onPress={() => login()}>
                        <Text style={styles.btnTextLogin}>MASUK</Text>
                    </Button>
                </View>

                <View style={styles.registerBox}>
                    <Text style={styles.textLogin}>Belum punya akun? </Text>
                    <Button style={styles.register} onPress={() => navigation.replace('Register')}>
                        <Text style={styles.registerText} colors={colors.blue}>Daftar</Text>
                    </Button>
                </View>

                <View style={styles.or}>
                    <Text style={styles.text}>Atau masuk dengan</Text>
                </View>

                <View style={styles.option}>
                    <Button style={styles.fingerprintButton} onPress={() => signInWithFingerprint()} >
                        <Icon name="fingerprint" size={20} style={styles.buttonIcon} />
                        <Text style={styles.fingerprintText}>Fingerprint</Text>
                        <View></View>
                    </Button>

                    <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Light}
                    onPress={() => signInWithGoogle()} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Login
