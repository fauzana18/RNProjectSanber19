import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, TextInput, Alert,  } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'
import { GoogleSigninButton } from '@react-native-community/google-signin'
import Axios from 'axios'
import { register } from '../api/api'

const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const message = (title, content, option=null, option2=null) => {
        let button = [
            {
            text: "Ok",
            style: "cancel"
            }
        ]
        if(option){
            button.unshift(option)
        }

        if(option2){
            button.unshift(option2)
        }
        Alert.alert(
            `${title}`,
            `${content}`,
            button,
            { cancelable: true }
        )
    }

    const onRegister = () => {
        if(email && name){
            let data = {
                name,
                email
            }
            Axios.post(`${register}`, data, {
                timeout: 5000
            })
            .then((res) => {
                navigation.push('Verification', {email})
            })
            .catch((err) => {
                message("Gagal Daftar", "Email sudah terdaftar", { 
                    text: 'Masukkan OTP', 
                    onPress: ()=>navigation.push('Verification', {email}
                )},
                { 
                    text: 'Atur Password', 
                    onPress: ()=>navigation.push('Password', {email}
                )})
            })
        }

        else{
            message("Gagal Daftar", "Email dan nama tidak boleh kosong")
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={"handled"} >
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Buat Akun</Text>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Email'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setEmail(value)}
                        keyboardType={"email-address"}
                        autoCapitalize={"none"}
                        value= {email}
                        returnKeyType={'next'}
                        onSubmitEditing={() => { nameInput.focus(); }}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        style={styles.textInput} 
                        placeholder = 'Nama Lengkap'
                        placeholderTextColor={colors.grey}
                        onChangeText ={ value => setName(value)}
                        autoCapitalize={'words'}
                        value= {name}
                        ref={input => { nameInput = input }}
                        onSubmitEditing={() => onRegister() }
                    />

                    <Button style={styles.btnLogin2} onPress={() => onRegister() } >
                        <Text style={styles.btnTextLogin}>DAFTAR</Text>
                    </Button>
                </View>

                <View style={styles.registerBox}>
                    <Text style={styles.textLogin}>Sudah punya akun? </Text>
                    <Button style={styles.register} onPress={() => navigation.replace("Login")}>
                        <Text style={styles.registerText} colors={colors.blue}>Masuk</Text>
                    </Button>
                </View>

                <View style={styles.or2}>
                    <Text style={styles.text}>Atau daftar dengan</Text>
                </View>

                <View style={styles.option}>
                    <Button style={styles.fingerprintButton} >
                        <Icon name="facebook" size={20} style={styles.buttonIcon} />
                        <Text style={styles.fingerprintText}>Facebook</Text>
                        <View></View>
                    </Button>

                    <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Light}
                    onPress={()=>{}}
                     />
                </View>

                <View style={styles.tnc}>
                    <Text style={styles.textLogin}>Dengan mendaftar, kamu setuju dengan</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Button>
                            <Text style={styles.textTnc}>Syarat dan Ketentuan</Text>
                        </Button>
                        <Text style={styles.textLogin}> Jaya Apps</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register
