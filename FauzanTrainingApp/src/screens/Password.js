import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, TextInput, Alert,  } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import { Button } from '../components/Button'
import { passwordUpdate } from '../api/api'
import Axios from 'axios'
import Icon from 'react-native-vector-icons/Feather'

const Password = ({navigation, route}) => {
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [visible1, setVisible1] = useState(true)
    const [icon1, setIcon1] = useState('eye-off')
    const [visible2, setVisible2] = useState(true)
    const [icon2, setIcon2] = useState('eye-off')

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

    const submit = () => {
        if(password && rePassword){
            let data = {
                email: route.params.email,
                password,
                password_confirmation: rePassword
            }
            Axios.post(`${passwordUpdate}`, data, {
                timeout: 5000
            })
            .then((res) => {
                navigation.popToTop()
                navigation.replace('Login')         
            })
            .catch((err) => {
                message("Gagal Atur Password", "Password tidak sama")
            })
        }
        else{
            message("Gagal Atur Password", "Password tidak boleh kosong")
        }
    }

    const isVisible1 = () => {
        setVisible1(!visible1)
        if(icon1 == 'eye'){
            setIcon1('eye-off')
        }
        else{
            setIcon1('eye')
        }
    }

    const isVisible2 = () => {
        setVisible2(!visible2)
        if(icon2 == 'eye'){
            setIcon2('eye-off')
        }
        else{
            setIcon2('eye')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={"handled"} >
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Atur Password</Text>

                <View style={styles.instruction}>
                    <Text style={styles.text}>Buat kata sandi baru untuk keamanan akun anda</Text>
                </View>

                <View style={styles.inputBox}>
                    <View style={styles.joinBox}>
                        <TextInput
                            style={styles.passwordInput} 
                            placeholder = 'Password'
                            placeholderTextColor={colors.grey}
                            onChangeText ={ value => setPassword(value)}
                            autoCapitalize={"none"}
                            value= {password}
                            returnKeyType={'next'}
                            onSubmitEditing={() => { reInput.focus(); }}
                            blurOnSubmit={false}
                            secureTextEntry={visible1}
                        />
                        <Button style={styles.eyeIcon} onPress={() => isVisible1()}>
                            <Icon name={icon1} size={20} style={styles.icon} />
                        </Button>
                    </View>

                    <View style={styles.joinBox}>
                        <TextInput
                            style={styles.passwordInput} 
                            placeholder = 'Masukkan ulang password'
                            placeholderTextColor={colors.grey}
                            onChangeText ={ value => setRePassword(value)}
                            autoCapitalize={'none'}
                            value= {rePassword}
                            ref={input => { reInput = input }}
                            secureTextEntry={visible2}
                            onSubmitEditing={() => submit()}
                        />
                        <Button style={styles.eyeIcon} onPress={() => isVisible2()}>
                            <Icon name={icon2} size={20} style={styles.icon} />
                        </Button>
                    </View>

                    <Button style={styles.btnLogin2} onPress={() => submit()} >
                        <Text style={styles.btnTextLogin}>SIMPAN</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}

export default Password
