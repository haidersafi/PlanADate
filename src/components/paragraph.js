import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Paragraph = ({style,center,children,...restProps}) => {
    return (
      <Text {...restProps} style={[{...styles.paragraph,textAlign:center?'center':'auto'},style]}>
        {children}
      </Text>
    )
  }
  const styles=StyleSheet.create({
      paragraph:{
          fontSize:12,
          lineHeight:15,
          color:'black',
          fontFamily:'Lato'
      }
  })

export default Paragraph

