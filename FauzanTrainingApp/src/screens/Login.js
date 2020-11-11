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

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                timeout: 2000
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

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={"handled"} >
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Silakan masuk</Text>

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

                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Password'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setPassword(value)}
                        autoCapitalize={"none"}
                        value= {password}
                        secureTextEntry={true}
                        disableFullscreenUI={true}
                        ref={input => { passwordInput = input }}
                        onSubmitEditing={() => login()}
                    />

                    <Button style={styles.btnLogin2} onPress={() => login()}>
                        <Text style={styles.btnTextLogin}>MASUK</Text>
                    </Button>
                </View>

                <View style={styles.registerBox}>
                    <Text style={styles.textLogin}>Belum punya akun? </Text>
                    <Button style={styles.register}>
                        <Text style={styles.registerText} colors={colors.blue}>Daftar</Text>
                    </Button>
                </View>

                <View style={styles.or}>
                    <Text style={styles.text}>Atau masuk dengan</Text>
                </View>

                <GoogleSigninButton
                style={styles.googleButton}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Light}
                onPress={() => signInWithGoogle()} />
            </View>
        </ScrollView>
    )
}

export default Login
