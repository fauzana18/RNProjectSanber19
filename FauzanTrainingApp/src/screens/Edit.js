import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, StatusBar, Image, TextInput, Modal, Alert } from 'react-native'
import styles from '../styles/style'
import colors from '../styles/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
import { user, main, update } from '../api/api'
import { Button } from '../components/Button'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { RNCamera } from 'react-native-camera'

const Edit = ({navigation}) => {
    let input = useRef(null)
    let camera = useRef(null)
    const [name, setName] = useState('')
    const [image, setImage] = useState()
    const [email, setEmail] = useState('')
    const [userToken, setUserToken] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [type, setType] = useState('back')
    const [photo, setPhoto] = useState(null)
    const [editable, setEditable] = useState(true)

    useEffect(() => {
        getToken()
    }, [])

    const getToken = async () => {
        const token = await AsyncStorage.getItem("token")
        setUserToken(token)
        return getData(token)
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
            setEmail(res.data.data.profile.email)
            setImage({uri: `${main}${res.data.data.profile.photo}`+ '?' + new Date(), cache: 'reload', headers: {Pragma: 'no-cache' }})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const toggleCamera = () => {
       setType(type == 'back' ? 'front' : 'back')
    }

    const takePicture = async () => {
        const option = { quality: 0.5, base64: true }
        if(camera){
            const data = await camera.current.takePictureAsync(option)
            setPhoto(data.uri)
            setImage({uri: `${data.uri}`})
            setIsVisible(false)
        }
    }

    const save = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('photo', {
            uri: photo,
            name: `photo.jpg`,
            type: 'image/jpg'
        })
        Axios.post(`${update}`, formData, {
            timeout: 5000,
            headers: {
                'Authorization': 'Bearer' + userToken,
                Accept: 'application/json',
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then((res) => {
            navigation.pop()
            navigation.replace('Profile')
        }).catch((err) => {
            message("Update Gagal", err)
        })
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

    const renderCamera =() => {
        return(
            <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} >
                <View style={{flex: 1}}>
                    <RNCamera style={{flex:1}} type={type} ref={camera}>
                        <View style={styles.flipContainer}>
                            <Button style={styles.flipButton} onPress={() => toggleCamera()}>
                                <Icon2 name='rotate-3d-variant' size={15} />
                            </Button>
                        </View>
                        <View style={styles.round} />
                        <View style={styles.rectangle} />
                        <View style={styles.takeContainer}>
                            <Button style={styles.takeButton} onPress={() => takePicture()}>
                                <Icon name='camera' size={40} />
                            </Button>
                        </View>
                    </RNCamera>
                </View>
            </Modal>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={'handled'} >
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.lightBlack} />
                <View style={styles.header}>
                    <Button style={styles.backButton} onPress={() => navigation.pop()}>
                        <Icon name='arrow-left' size={40} style={styles.icon2} />
                    </Button>
                    <Text style={styles.headerText2}>Edit Profil</Text>
                    <View></View>
                </View>

                <Image style={styles.image2} source={image} />

                <Button style={styles.cameraButton} onPress={() => setIsVisible(true)}> 
                    <Icon name='camera' size={40} style={styles.icon2} />
                </Button>

                <View style={styles.inputBox2}>
                    <Text style={styles.textLogin} >Nama Lengkap</Text>
                    <View style={styles.nameBox2}>
                        <TextInput
                            style={[styles.textInput2, {color: editable ? colors.lightGrey : colors.grey}]} 
                            placeholder = 'Nama'
                            placeholderTextColor={colors.grey}
                            onChangeText ={ value => setName(value)}
                            autoCapitalize={"words"}
                            value= {name}
                            editable={editable} 
                        />
                        <Button style={styles.editable} onPress={() => setEditable(!editable)}>
                            <Icon name='edit-2' size={20} style={styles.icon2} />
                        </Button>
                    </View>

                    <Text style={styles.textLogin} >Email</Text>
                    <TextInput
                        style={styles.textInput2} 
                        placeholder = 'Email'
                        placeholderTextColor={colors.grey}
                        value= {email}
                        editable={false}
                    />

                    <Button style={styles.btnLogin2} onPress={() => save()}>
                        <Text style={styles.btnTextLogin}>SIMPAN</Text>
                    </Button>
                </View>
                {renderCamera()}

            </View>
        </ScrollView>
    )
}

export default Edit
