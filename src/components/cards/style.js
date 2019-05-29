import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../style/base.js';


const cards = {
	

	cardWrapperLG: {
		borderRadius: 6, 
		width: '100%',
		
		height: 150,
	},

	cardWrapperMD:{
		borderRadius: 6, 
		width: 200,
		height: 80,
		justifyContent: "center",
		flex: 1
	},

	cardImageWrapper: {
		borderTopRightRadius: 5, 
		borderTopLeftRadius: 5,
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5,
		overflow: 'hidden'
	},

	

	cardImage:{
		height: 150,
		width: '100%',
		overflow: 'hidden'
	},

	cardImageLG:{
		height: 100,
		width: 100,
	},

	cardImageMD:{
		height: 80,
		width: 80
	},

	cardTitle: {
		
		height: 20,
		width: '100%',
		paddingLeft: 5,

	},
	

	cardTitleText:{
		color: "white",
		fontWeight: 'bold'
	},

	textWrapper: {
		position: 'absolute',
		bottom: 5,
		paddingLeft: 5,
		paddingBottom: 5
	},




	row: {
		flexDirection: 'row',
		marginBottom: 5,
		alignItems: 'center'
	},
	rowRight: {
		justifyContent: 'flex-end',
		paddingRight: 5
	}

}

export {cards}