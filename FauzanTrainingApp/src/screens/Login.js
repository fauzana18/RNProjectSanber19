import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StatusBar, Alert } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import Axios from 'axios'
import { auth } from '../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const saveToken = async (token) => {
        try{
            await AsyncStorage.setItem("token", token)
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
                timeout: 20000
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

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Silakan masuk</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Email'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setEmail(value)}
                        value= {email}
                    />

                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Password'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setPassword(value)}
                        value= {password}
                        secureTextEntry={true}
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
            </View>
        </ScrollView>
    )
}

export default Login
