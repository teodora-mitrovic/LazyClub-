import React from 'react';
import {View,  StyleSheet, TouchableOpacity, Text} from 'react-native';
import {buttons} from './style.js';



export default class CustomButton extends React.Component{
   
  constructor(props){
  	super(props);
  }

  render(){
    return(
              <View>{this.buttonTextColor()}</View>

      )
  }

  buttonTextColor(){

    if(this.props.textColor=="white"){
     return (
             <TouchableOpacity style={[buttons.button, buttons.buttonBlue]}
                               onPress={this.props.onPress}>
                <Text style={buttons.buttonText}>{this.props.text}</Text>
              </TouchableOpacity>
     )
    
    }

    else {
      return (
            <TouchableOpacity style={[buttons.button]}
                               onPress={this.props.onPress}>
                <Text style={buttons.buttonTextBlue}>{this.props.text}</Text>
              </TouchableOpacity>
    
      )
    }


  }

  	 


}


