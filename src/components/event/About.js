import React from 'react';
import {View,  StyleSheet, Text} from 'react-native';

export default class About extends React.Component{

	constructor(props) {
		super(props);
	}
   
  render(){
    return(
			<Text style={{height: '100%', borderLeftWidth: 1, borderColor: '#025284', paddingLeft: 5}}
	              underlineColorAndroid='rgba(0,0,0,0)'>
	              {this.props.description}
		    </Text>

      )
  }

}







