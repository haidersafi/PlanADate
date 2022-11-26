import {StyleSheet, Text, View, SafeAreaView,Image} from 'react-native';
import React from 'react';
import logo from '../assets/logo/Logo/Logo.png';
import bubbles from '../assets/images/Group-1153/Group-1153.png';
import Heading from '../components/heading';
import Input from '../components/input';
import Paragraph from '../components/paragraph';
import Button from '../components/button';


const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} resizeMode='contain'/>
      <Image source={bubbles} resizeMode='contain'/>
      <View style={styles.card}>
        <Heading center>Login To Your Account</Heading>
        <Paragraph>Please enter your login details</Paragraph>
        <Input placeHolder="Email" keyboardType="email-address"/>
        <Input placeHolder="Password" secureTextEntry/>
        <View>
          <View>
            <Image/>
            <Paragraph>Remember Me</Paragraph>
          </View>
          <Paragraph>Forgot Password</Paragraph>
        </View>
        <Button title="login" center/>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0AC2CC'
    },
    card:{
      backgroundColor:'white',
      borderTopLeftRadius:32,
      borderTopRightRadius:32,
      paddingTop:0,
      position:'absolute',
      top:300,
      paddingTop:50,
      left:0,
      right:0

    }
});
export default Login;