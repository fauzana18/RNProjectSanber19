import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tugas1 = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Kelas React Native Lanjutan Sanbercode!</Text>
        </View>
    )
}

export default Tugas1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})
