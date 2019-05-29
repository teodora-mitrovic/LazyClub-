import React from 'react';
import {View,  StyleSheet, ImageBackground, Text, TouchableOpacity, AsyncStorage} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { Icon } from 'react-native-elements';
import {cards} from './style.js';
import {buttons} from '../buttons/style.js';
import XButton from '../buttons/XButton.js';



export default class EventCard extends React.Component{

  constructor(props){
  	super(props);
  }


  render(){

    return(
		 <View style={[ cards.cardWrapperLG], {marginBottom: 10}}>
		 	<TouchableOpacity onPress = {() => this.props.navigation.navigate('Event', {id: this.props.data.id})}>
			 	<View style={cards.cardImageWrapper}>
			 		<ImageBackground style={cards.cardImage}
			 					 source={require('../../../assets/pageTop.jpg')}
			 					 imageStyle={{ borderTopRightRadius: 5, 
			 					 			   borderTopLeftRadius: 5 }} >

			 		

			 		<View style={cards.textWrapper}>
			 			<View style={[cards.cardTitle]}>
				 			<Text style={cards.cardTitleText}>
				 				{this.props.data.name}
				 			</Text>
				 		</View>
				 		<View style={cards.row}>
				 			<Icon name='map-marker'
				 			  type='font-awesome'
				 			  color= 'white'
				 			/>
				 			
				 			<Text style={{marginLeft:5, color: 'white'}}>{this.props.data.location.name}</Text>
				 		</View>

				 		<View style={cards.row}>
				 			<Icon name='calendar'
				 			  type='font-awesome'
				 			  color= 'white'
					 		/>
					 		<Text style={{marginLeft:5, color: 'white'}}>{this.props.data.date}</Text>
				 		</View>
			 		</View>
			 		
			 		</ImageBackground>
			 	</View>
			</TouchableOpacity>
		 	
		 </View>

      )
  }

 

}





