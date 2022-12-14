/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/login';



const App =()=> {
  

  return (
    <SafeAreaView style={styles.container} >
      <Login/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
    
  },
  
});

export default App;
