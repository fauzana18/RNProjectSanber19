import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar, Alert } from 'react-native'
import colors from '../styles/colors'
import styles from '../styles/style'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Button } from '../components/Button'
import { verification, reOtp } from '../api/api'
import Axios from 'axios'

const Verification = ({navigation, route}) => {
    const [otp, setOtp] = useState(null)
    const [disabled, setDisabled] = useState(true)

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

    const verificate = () => {
        let data = {
            otp
        }
        Axios.post(`${verification}`, data, {
            timeout: 5000
        })
        .then((res) => {
            let ok = res.data.response_code
            if(ok == '01'){
                message("Gagal Verifikasi", res.data.response_message)
            }
            else{
                navigation.push('Password', {email: route.params.email})
            }            
        })
    }

    const request = () => {
        let data = {
            email: route.params.email
        }
        Axios.post(`${reOtp}`, data, {
            timeout: 5000
        })
        .then((res) => {
            message("Request Berhasil", "Kode OTP baru sudah dikirim ulang, silakan cek email anda")
        })
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={"handled"}>
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} barStyle="light-content" />
                <Text style={styles.headerText}>Verifikasi Email</Text>

                <View style={styles.instruction}>
                    <Text style={styles.text}>Masukkan 6 digit kode yang kami kirim ke</Text>
                    <Text style={styles.text}>{route.params.email}</Text>
                </View>
                
                <View style={styles.inputBox}>
                    <OTPInputView 
                        style={styles.otpBox}
                        pinCount={6} 
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        selectionColor={colors.grey}
                        onCodeChanged={code=>setOtp(code)}
                        onCodeFilled={() => setDisabled(false)}
                    />

                    <Button style={styles.btnLogin2} onPress={() => verificate()} disabled={disabled}>
                        <Text>VERIFIKASI</Text>
                    </Button>
                </View>

                <View style={styles.registerBox}>
                    <Text style={styles.textLogin}>Belum menerima kode verifikasi? </Text>
                    <Button style={styles.register} onPress={() => request()}>
                        <Text style={styles.registerText} colors={colors.blue}>Kirim ulang</Text>
                    </Button>
                </View>

            </View>
        </ScrollView>
    )
}

export default Verification
