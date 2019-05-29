import React from 'react';
import {View,  StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

export default class MenuXButton extends React.Component{
  
	constructor(props){
		super(props);

	}

  render(){
    return(
		 <TouchableOpacity style={[styles.menuButton]}
		 					onPress={this.props.onPress}
		 >
	          <Icon
	          	name='times'
				type='font-awesome'
				color='white'
	          />
       		</TouchableOpacity>
		    
      )
  }

}

const styles = StyleSheet.create({
	menuButton: {
		position: 'absolute',
		top: 10,
		right: -10,
		width: 100,

	}



})
