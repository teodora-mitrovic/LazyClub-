
import {colors} from '../../style/base.js'

import {StyleSheet, Dimensions} from 'react-native';


const modals = StyleSheet.create({

	modalWrapper: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
	},

	form: {
		alignItems: 'center',    
		width: 320, 
		height: '100%',
		paddingTop: 15

	},

	input: {
		color: colors.blue,
		borderColor: colors.blue,
		borderBottomWidth: 1,
		backgroundColor: 'transparent',
	    height: 70,
	    width: '90%',
	    borderRadius: 5,

  
	},

	datePickerWrapper: {
		flex: 1
	},

	title: {
		fontSize: 15,
		textAlign: 'left'
	},
	line: {

		borderBottomWidth: 1,
		borderColor: '#ddd',
		width: '100%',
		marginBottom: 15
		
	},
	addButton: {
		width:'100%',
        borderTopWidth:1,
        borderColor:'#ddd',
        bottom: 0,
        height: 50,
        position: 'absolute',
        backgroundColor: 'white',
        alignItems:'center' ,
        justifyContent: 'center',
        flexDirection: 'row'
	}


})


export {modals}