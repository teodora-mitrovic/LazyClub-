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
		 				   onPress={() => {this.props.navigation.navigate(this.props.page)}}>
	            <Icon
		          	name='plus'
					type='font-awesome'
					color='#025284'
					size={30}
		        />
       		</TouchableOpacity>
		    
      )
  }

}

const styles = StyleSheet.create({
	menuButton: {
		alignItems:'center',
	}



})
