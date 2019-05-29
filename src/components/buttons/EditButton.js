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
	          	name='edit'
				type='font-awesome'
				color='#025284'
				size={25}
	          />
       		</TouchableOpacity>
		    
      )
  }

}

const styles = StyleSheet.create({
	menuButton: {
		alignItems:'center',
		marginLeft: 20
	}



})
