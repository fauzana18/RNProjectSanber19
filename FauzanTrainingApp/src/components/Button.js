import React from 'react'
import { TouchableOpacity } from 'react-native'

export const Button = (props) => {
    return (
        <TouchableOpacity style={{...props.style}} onPress={props.onPress} activeOpacity={0.7}>
            {props.children}
        </TouchableOpacity>
    )
}