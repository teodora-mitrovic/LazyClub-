import React from 'react';
import {View, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import LoginForm from '../components/forms/LoginForm.js';


export default class Login extends React.Component{
 
  render(){
    return(
      
      <ImageBackground 
        source={require('../../assets/background.jpg')} 
        style={styles.backgroundImage}>
        

        <StatusBar hidden />
        <View style={styles.container}>
        <LoginForm/>
        </View>
        
      </ImageBackground>

      )
  }

}

const styles = StyleSheet.create({

  backgroundImage: {
    width: '100%', 
    height: '100%'
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',

  },
});

