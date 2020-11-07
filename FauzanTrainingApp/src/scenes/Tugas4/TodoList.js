import React, { useContext } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RootContext } from '../context'

const TodoList = () => {
    const state = useContext(RootContext)

    const renderItem = ({item}) => {
        return(
            <View style={styles.notes}>
                <View style={styles.textNotes}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
                <TouchableOpacity onPress={()=>state.deleteNote(item.key)}>
                    <Icon style={styles.icon} name="trash-o" size={40}/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' />
            <Text style={[styles.text, {paddingLeft: 10}]}>Masukkan Todolist</Text>

            <View style={styles.input}>
                <TextInput 
                style={styles.textInput} 
                placeholder = 'Input here'
                onChangeText ={ value => state.handleChangeInput(value)}
                value= {state.noteText}
                />
                <TouchableOpacity onPress={()=>state.addNote()}>
                    <View style={styles.button}>
                        <Text style={{ fontSize: 24 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={state.note}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                style={{marginBottom:20}}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 16
    },
    input: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '85%',
        height: 50,
        fontSize: 16,
        color: 'black'
    },
    button: {
        backgroundColor: '#42BAFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    },
    notes: {
        borderWidth: 5,
        borderColor: '#CCD0D2',
        borderRadius: 5,
        height: 90,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textNotes: {
        paddingLeft: 15
    },
    icon: {
        paddingRight: 15
    },
    scroll: {
        flex: 1,
        marginBottom: 20
    }
})
