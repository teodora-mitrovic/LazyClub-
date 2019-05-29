import React from 'react';
import {View,  TextInput} from 'react-native';
import {colors, fonts} from '../../style/base.js';


export default class Education extends React.Component{
   
  render(){
    return(
		<View style={{borderLeftWidth: 1, 
					borderColor: '#025284', 
					paddingLeft: 10, 
					justifyContent: 'center'}}>
			<TextInput
					  style={{fontSize: fonts.md}}
	                  placeholder="Institution"
	                  placeholderTextColor='#025284'
	                  underlineColorAndroid='rgba(0,0,0,0)'>
		    </TextInput>
		    <TextInput
	                  placeholder="From"
	                  placeholderTextColor='#025284'
	                  underlineColorAndroid='rgba(0,0,0,0)'>
		    </TextInput>
		    <TextInput
	                  placeholder="To"
	                  placeholderTextColor='#025284'
	                  underlineColorAndroid='rgba(0,0,0,0)'>
		    </TextInput>
		    <TextInput
	                  placeholder="Title"
	                  placeholderTextColor='#025284'
	                  underlineColorAndroid='rgba(0,0,0,0)'>
		    </TextInput>
		</View>

      )
  }

}


