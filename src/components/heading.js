import React from 'react'
import { StyleSheet,Text } from 'react-native'

const Heading = ({style,center,children,...restProps}) => {
  return (
    <Text {...restProps} style={[{...styles.heading,alignItems:center?'center':'auto'},style]}>
      {children}
    </Text>
  )
}
const styles=StyleSheet.create({
    heading:{
        fontSize:24,
        lineHeight:29,
        
        color:'black',
        fontFamily:'Lato'
    }
})
export default Heading;
