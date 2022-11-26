import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title,type,style,center}) => {
  return (
   <TouchableOpacity style={[{...styles.button,alignItems:center?'center':'auto'},style]}>
    <Text>{title}</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({button:{}})