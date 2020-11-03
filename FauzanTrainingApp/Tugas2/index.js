import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Account</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.nameBox}>
                    <Image style={styles.image} source={require('./foto.png')} />
                    <Text style={styles.name}>Ahmad Fauzan Maulana</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={[styles.menuBox, {marginBottom: 5, justifyContent: 'space-between'}]}>
                    <View style={styles.box1}>
                        <Icon style={styles.icon} name="wallet-outline" size={40}/>
                        <Text style={styles.text}>Saldo</Text>
                    </View>
                    <Text style={[styles.text, {marginRight: 20}]}>Rp. 120.000.000</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.menuBox}>
                    <Icon style={styles.icon} name="settings-outline" size={40}/>
                   <Text style={styles.text}>Pengaturan</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.menuBox}>
                    <Icon style={styles.icon} name="help-circle-outline" size={40}/>
                    <Text style={styles.text}>Bantuan</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.menuBox}>
                    <Icon style={styles.icon} name="document-text-outline" size={40}/>
                    <Text style={styles.text}>Syarat & Ketentuan</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={[styles.menuBox, {marginTop: 5}]}>
                    <Icon style={styles.icon} name="exit-outline" size={40}/>
                    <Text style={styles.text}>Keluar</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#23A0E8',
        height:100,
        justifyContent: 'center',
        elevation: 5
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 15,
        fontWeight: 'bold'
    },
    nameBox: {
        backgroundColor: 'white',
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 2
    },
    image: {
        height: 60,
        width: 60,
        marginLeft: 20,
        marginRight: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    menuBox: {
        backgroundColor: 'white',
        height: 80,
        marginBottom: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text:{
        fontSize: 18
    },
    box1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:
    {
        marginRight: 20,
        marginLeft: 20
    }
})
