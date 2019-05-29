import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {baseStyle, colors} from '../style/base.js';
import {cards} from './cards/style.js';




export default class Loader extends React.Component {


	render() {
		return(
			<View style={[baseStyle.container, {flex:1, justifyContent: 'center'}]}>
  				<View style = {[cards.row, {flex: 1, justifyContent: 'center'}]}>
      				<ActivityIndicator size="large" color = {colors.blue} />
      				<Text style = {[baseStyle.blueText, {marginLeft: 10}]}>Be patient</Text>

  				</View>
      		</View>
			)
	}

}