import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const Input=({placeHolder,keyboardType,style,restProps}) => {
  return (
<TextInput {...restProps} style={[{...styles.input},style]} placeHolder={placeHolder} keyboardType={keyboardType}/>
    )
}

const styles=StyleSheet.create({input:{
    borderRadius:24,borderWidth:1,borderColor:'#00000080',paddingVertical:10,paddingHorizontal:20
}})
export default Input;