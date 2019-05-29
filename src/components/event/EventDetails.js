import React from 'react';
import {View,  Text} from 'react-native';
import {baseStyle} from '../../style/base.js';



export default class EventDetails extends React.Component{
   
  constructor(props) {
  	super(props);
  }

  render(){
    return( 
		<View style={baseStyle.containerBlue}>
			<Text style={baseStyle.whiteText}>Date / {this.props.data.date}</Text>
			<Text style={baseStyle.whiteText}>Time / {this.props.data.time}</Text>
			<Text style={baseStyle.whiteText}>Location / {this.props.data.location.name}</Text>
			<Text style={baseStyle.whiteText}>Language / {this.props.data.language.name}</Text>


		</View>

      )
  }

}