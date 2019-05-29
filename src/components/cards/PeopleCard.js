import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {cards} from './style.js';
import Profilepicture from '../profile/Profilepicture.js';

export default class PeopleCard extends React.Component{


  constructor(props){
  	super(props);
  }
   
  render(){
    return(
		
			<View>{this.imageBorder()}</View>
	

      )
  }


  imageBorder(){
  		if(this.props.size=="large"){
  				return (
  				<View style={[cards.cardWrapperMD]}>
  					<TouchableOpacity onPress={ () => {this.props.navigation.navigate('Profile', {id: this.props.data.id})} }>
		 			


		 			<View style={[cards.row, {justifyContent:"center"}]}>

				 		<Profilepicture size="large" upload="false"/>

				 		<View style={[cards.textWrapper, {justifyContent:"center"}]}> 

				 			<View style={cards.row}>
				 				<Text>{this.props.data.name}{this.props.data.surname}</Text>
				 			</View>

				 			<View style={cards.row}>
				 				<Text>{this.props.position}</Text>
				 			</View>

				 		</View>

		 			</View>
		 			</TouchableOpacity>

				</View>
  			)
  		}
  		else {
  				if(this.props.page=='People') {
  					return (
  						<View style={[cards.cardWrapperLG, {justifyContent: "center", marginBottom: 10}]}>

		  					<TouchableOpacity onPress={ () => {this.props.navigation.navigate('Profile', {id: this.props.data.id})} }>
		  					<View style = {cards.row}>
						 		<Profilepicture size="small"/>
						 		
						 		<View style={{marginLeft:10}}>
						 			<View style = {cards.row}>
						 			<Text> {this.props.data.name} {this.props.data.surname}</Text>
							 		</View>
							 		<View style = {cards.row}>
							 			<Text>{this.props.data.position}</Text>

							 		</View>
						 		</View> 
					 		</View>


				 			</TouchableOpacity>


						</View>
  					)
  				}

  				else {
  					return (

		  				<View style={[cards.cardWrapperLG, {justifyContent: "center"}]}>

		  					<TouchableOpacity onPress={ () => {this.props.navigation.navigate('Profile', {id: this.props.data.id})} }>
		  					<View style = {cards.row}>
						 		<Profilepicture size="small"/>
						 		
					 		</View>


				 			</TouchableOpacity>


						</View>
  					)
  				}
  		}
  		

  	
  }

}





