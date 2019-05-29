import React from 'react';
import {View,  Text} from 'react-native';
import {baseStyle} from '../../style/base.js';



export default class ProjectDetails extends React.Component{
   

  constructor(props) {
  	super(props);
  }

  render(){
    return( 
		<View style={baseStyle.containerBlue}>
			
			<Text style={baseStyle.whiteText}>Sector / {this.props.data.sector}</Text>
			<Text style={baseStyle.whiteText}>Start date / {this.props.data.start_date}</Text>
			<Text style={baseStyle.whiteText}>Start date / {this.props.data.end_date}</Text>
			<Text style={baseStyle.whiteText}>Location / {this.props.data.location.name}</Text>
			<Text style={baseStyle.whiteText}>Language / {this.props.data.language.name}</Text>


		</View>

      )
  }

}