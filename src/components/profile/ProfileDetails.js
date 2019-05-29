import React from 'react';
import {View,  Text} from 'react-native';
import {baseStyle} from '../../style/base.js';



export default class ProfileDetails extends React.Component{
   
  render(){
    return( 
		<View style={[baseStyle.containerBlue, {width:'100%'}]}>
			<Text style={baseStyle.whiteText}>Join date / </Text>
			<Text style={baseStyle.whiteText}>Status / </Text>

		</View>

      )
  }

}


