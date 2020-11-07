import React, { useContext } from 'react'
import { Alert, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { RootContext } from '../context'

const contact = () => {
    const context = useContext(RootContext)

    const hapus = (name, phone) => {
        Alert.alert(
            `Hapus ${name}`,
            'Apakah anda yakin?',
            [
              { 
                text: "Ya",
                onPress: ()=>context.deleteContact(phone)
              },
              {
                text: "Tidak",
                style: "cancel"
              },
            ],
            { cancelable: true }
        )
    }

    const renderItem = ({item}) => {
        return(
            <View style={styles.list}>
                <View style={styles.identity}>
                    <Image style={styles.image} source={require('../../assets/images/contact.png')} />
                    <View style={styles.identityText}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.phone}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>hapus(item.name, item.phone)}>
                    <Icon2 style={styles.delete} name="deleteuser" size={20}/>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#333434' />
            <Text style={styles.header}>Kontak Saya</Text>

            <FlatList
                data={context.contact.sort((a, b) => a.name.localeCompare(b.name))}
                renderItem={renderItem}
                keyExtractor={item => item.phone}
                style={{marginBottom:20}}
            />
            
            <View style={styles.input}>
                <View style={styles.textBox}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder = 'Masukkan nama kontak'
                        placeholderTextColor={'#7C7B7B'}
                        onChangeText ={ value => context.handleChangeName(value)}
                        value= {context.name}
                    />

                    <TextInput
                        style={styles.textInput}
                        keyboardType= {"numeric"} 
                        placeholder = 'Masukkan nomor telepon'
                        placeholderTextColor={'#7C7B7B'}
                        onChangeText ={ value => context.handleChangePhone(value)}
                        value= {context.phone}
                    />
                </View>

                <TouchableOpacity onPress={()=>context.addContact()}>
                    <View style={styles.button}>
                        <Icon style={styles.add} name="person-add-outline" size={40}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333434',
        justifyContent: 'space-between'
    },
    header: {
        alignSelf: "center",
        color: '#F0F0F0',
        fontSize: 24,
        paddingTop: 15
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    textBox: {
        width: '75%',
        height: 100,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    textInput: {
        borderColor: '#F0F0F0', 
        borderWidth: 1,
        borderRadius: 50,
        height: 45,
        color: '#F0F0F0'
    },
    button: {
        backgroundColor: '#1EB256',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 100,
        marginRight: 15,
        borderRadius: 10
    },
    add: {
        color: '#F0F0F0'
    },
    list: {
        height: 80,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    identity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    identityText: {
        justifyContent: 'space-between'
    },
    text: {
        color: '#F0F0F0'
    },
    delete: {
        color: '#5E5E5E'
    }
})