import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';

const App = () => {
  return (
    // <AppNavigation>
    // </AppNavigation>
    <View style={styles.screen}>
      <View style={styles.textContainer}>
          <Text style={{color:'white'}}>ANIL</Text>
          <Text style={{color:'white'}}>NİHAT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor:'black',  
  },
  textContainer:{
    paddingTop:100,
    height: 200,
    backgroundColor: 'red',
    alignItems:'center'
  }
})

export default App;