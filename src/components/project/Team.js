import React from 'react';
import {View,  StyleSheet} from 'react-native';
import Profilepicture from '../profile/Profilepicture.js';
import PeopleCard from '../cards/PeopleCard.js';
import {baseStyle, colors, fonts} from '../../style/base.js';





export default class Team extends React.Component{
   
  render(){
    return(

			<View>
				<View style={[baseStyle.row, {justifyContent: 'flex-start'}]}>
				<PeopleCard border="white"
							size="large"
							 name="Name" 
							 surname="Surname" 
							 position="Team lead"/>
				
				</View>
				<View style={baseStyle.row}>
					<PeopleCard border="white"
							size="small"

					 name="Name" surname="Surname" position="IT"/>
				</View>
				<View style={baseStyle.row}>

					 <PeopleCard border="white"
							size="small" 
							name="Name" 
							surname="Surname" 
							position="HR"/>
				</View>
				<View style={baseStyle.row}>
					<PeopleCard border="white"
							size="small"

					 name="Name" surname="Surname" position="FR"/>
				</View>
				<View style={baseStyle.row}>
					 
					 <PeopleCard border="white"
							size="small" 
							name="Name" 
							surname="Surname" 
							position="PR"/>


				</View>
			</View>
		

      )
  }

}


