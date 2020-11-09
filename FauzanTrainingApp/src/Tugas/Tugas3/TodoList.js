import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const TodoList = () => {
    const [note, setNote] = useState([])
    const [noteText, setNoteText] = useState('')

    let notes = note.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
                deleteMethod={ () => deleteNote(val, key) } />
    })

    const addNote = () => {
        if(noteText){
            var d = new Date();
            note.push({
            'date': d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear(),
            'note': noteText,
            })
            setNoteText('')
            inputText.clear()
        }
    }

    const deleteNote = (val, key) => {
        note.splice(key, 1)
        setNote([...note])
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' />
            <Text style={[styles.text, {paddingLeft: 10}]}>Masukkan Todolist</Text>

            <View style={styles.input}>
                <TextInput 
                style={styles.textInput} 
                placeholder = 'Input here'
                onChangeText ={ text => setNoteText(text)}
                ref={input => { inputText = input }}
                />
                <TouchableOpacity onPress={addNote}>
                    <View style={styles.button}>
                        <Text style={{ fontSize: 24 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.scroll}>
                {notes}
            </ScrollView>
        </View>
    )
}

export default TodoList

const Note = (props) => {
    return(
        <View key={props.keyval} style={styles.notes}>
            <View style={styles.noteText}>
                <Text style={styles.text}>{props.val.date}</Text>
                <Text style={styles.text}>{props.val.note}</Text>
            </View>
            <TouchableOpacity onPress={props.deleteMethod}>
                <Icon style={styles.icon} name="trash-o" size={40}/>
            </TouchableOpacity>
        </View>
    )
}

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
    noteText: {
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
