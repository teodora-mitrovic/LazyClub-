import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../style/base.js'

const buttons = StyleSheet.create({

	button: {
		borderRadius: 5,
		padding: 5,
		marginLeft:5,
		alignItems: 'center',
		width: 90,


	},
	buttonGreen: {
		backgroundColor: colors.green
	},
	buttonBlue: {
		backgroundColor: colors.blue

	},
	buttonWhite: {
		backgroundColor: "white"

	},

	

	buttonText: {
		color: "white"
	},
	buttonTextBlue: {
		color: colors.blue, 
		fontSize: 20
	}

})

export {buttons}

