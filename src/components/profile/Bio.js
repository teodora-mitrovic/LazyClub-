import React from 'react';
import {View,  StyleSheet, Text, TextInput} from 'react-native';

export default class Bio extends React.Component{
   
	constructor(props){
		super(props);
	}

  render(){
    return(
			<Text style={{height: '100%', borderLeftWidth: 1, borderColor: '#025284', paddingLeft: 5}}>
			{this.props.bio}
			</Text>

      )
  }

}







