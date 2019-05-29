import React from 'react';
import {View,  StyleSheet, Text} from 'react-native';

import {baseStyle} from '../style/base.js';

export default class App extends React.Component{
   
  constructor(props){
  	super(props);
  }

  render(){
    return(
		  <View>{this.sectionBackgroundColor()}</View>

      )
  }

  sectionBackgroundColor(){
    if(this.props.color=="blue") {
      return <View style={[baseStyle.sectionTitle]}>
                <Text style={baseStyle.sectionTitleTextBlue}>{this.props.title}</Text> 
              </View>
    }
    else {
      return <View style={[baseStyle.sectionTitle]}>
                <Text style={baseStyle.sectionTitleTextGreen}>{this.props.title}</Text> 
              </View>

    }
  }

}










