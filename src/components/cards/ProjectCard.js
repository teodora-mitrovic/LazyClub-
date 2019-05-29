import React from 'react';
import {View,  StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {cards} from './style.js';

export default class ProjectCard extends React.Component{


  constructor(props) {
  	super(props);
  }
   
  render(){
    return(
		 <View style={[cards.cardWrapperLG], {marginBottom: 10}}>
		 	<TouchableOpacity onPress = {() => {this.props.navigation.navigate('Project', {id:this.props.data.id})}} >
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
						 		<Text style={{marginLeft:5, color: 'white'}}>{this.props.data.start_date}</Text>
						 		<Text> - </Text>
						 		<Text style={{marginLeft:5, color: 'white'}}>{this.props.data.end_date}</Text>
					 		</View>
					 	</View>

			 		</ImageBackground>
			 	</View>
		 	</TouchableOpacity>
	
		 </View>

      )
  }

}


