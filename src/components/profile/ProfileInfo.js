import React from 'react';
import {View,  Text, TextInput} from 'react-native';
import {baseStyle} from '../../style/base.js';
import {colors, fonts} from '../../style/base.js'
import Profilepicture from './Profilepicture.js';
import { Icon } from 'react-native-elements';


export default class ProfileInfo extends React.Component{

    constructor(props){
        super(props);
    }
   
  render(){
    return(

    	<View style={[baseStyle.column]}>
    		<Profilepicture size="large" upload="true"/>
    		

    			<View style={[baseStyle.row, {marginBottom: 10, marginTop: 10}]}>
    				<Text style={[baseStyle.blueText, {fontSize: fonts.lg}]}>{this.props.name} {this.props.surname}</Text>

    			</View>
                
    			
				<Text  style={[baseStyle.blueText, {fontSize: fonts.md, marginBottom: 10}]}
                            underlineColorAndroid='rgba(0,0,0,0)'>{this.props.position}
                </Text>
			

			
				<Text style={[baseStyle.blueText, {fontSize: fonts.md,marginBottom: 10}]}
                            placeholder="Sector"
                            placeholderTextColor="#025284"
                            underlineColorAndroid='rgba(0,0,0,0)'>{this.props.sector}
                </Text>
    			

    			
				<Text style={[baseStyle.blueText, {fontSize: fonts.md, marginBottom: 10}]}
                            placeholder="Email"
                            placeholderTextColor="#025284"
                            underlineColorAndroid='rgba(0,0,0,0)'>{this.props.email}
                </Text>
    			
                {/*
    			<View style={{flexDirection: 'row', justifyContent: 'space-between',
                            width: '35%'}}>
                    <Icon
                    name='facebook'
                    type='font-awesome'
                    color='#025284'/>
                    <Icon
                    name='twitter'
                    type='font-awesome'
                    color='#025284'/>
                    <Icon
                    name='linkedin'
                    type='font-awesome'
                    color='#025284'/>
                </View> */}

    		
    	</View>
		
      )
  }

}


