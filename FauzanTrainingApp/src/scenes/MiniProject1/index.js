import React, { useState } from 'react'
import { Alert } from 'react-native'
import { RootContext } from '../context'
import Contact from './contact'

const index = () => {
    const [contact, setContact] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const pesan = (isi) => {
        Alert.alert(
            "",
            `${isi}`,
            [
              { text: "OK"}
            ],
            { cancelable: true }
        )
    }

    handleChangeName = (value) => {
        setName(value)
    }

    handleChangePhone = (value) => {
        setPhone(value)
    }

    addContact = () => {
        if(name && phone){
            if(phone.length >= 10){
                let same = false
                let exist
                for(let i = 0; i < contact.length; i++){
                    if(phone == contact[i].phone){
                        same = true
                        exist = contact[i].name
                    }
                }
                
                if(!same){
                    setContact([...contact, {name, phone}])
                    setName('')
                    setPhone('')
                }

                else{
                    pesan(`Nomor telepon sudah terdaftar dengan nama ${exist}`)
                }
            }

            else{
                pesan("Nomor telepon minimal 10 digit")
            }
        }

        else{
            pesan("Nama dan nomor telepon harus diisi!")
        }
    }

    deleteContact = (key) => {
        for(let i=0; i < contact.length; i++){
            if(key === contact[i].phone){
                contact.splice(i, 1)
                setContact([...contact])
            }
        }
    }

    return (
        <RootContext.Provider value={{
            contact,
            name,
            phone,
            handleChangeName,
            handleChangePhone,
            addContact,
            deleteContact
        }}
        >
            <Contact />
        </RootContext.Provider>
    )
}

export default index