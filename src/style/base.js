import {StyleSheet, Dimensions} from 'react-native'

export const colors = {
	blue:'#025284',
	green: '#07dd85',
	
}

export const fonts = {
	sm: 12,
	md: 18,
	lg: 24
}


const baseStyle = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: "white",

	},

	contentContainer: {
		width: '90%',
		justifyContent: 'center',
		paddingTop: 20
	},

	containerBlue: {
		backgroundColor: colors.blue,
		width: '100%',
		minHeight: 150,
		justifyContent: 'center',
		paddingLeft: 20
	},

	
	section: {
		marginBottom: 20,
	    marginTop: 20,
	    marginLeft: 20,

	},

	sectionHome: {

		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	sectionTitle: {
		
	    
	    width: 200,
	    
	    height: 30,
	    
	    borderRadius: 5,
	    justifyContent: 'center',
	    paddingLeft: 15,
	    backgroundColor: 'white',

	},

	sectionTitleTextBlue : {

	    color: colors.blue,
	    fontSize: fonts.md,
	    fontWeight: 'bold'

	  
	},

	sectionTitleTextGreen : {

	    color: colors.green,
	    fontSize: fonts.md,
	    fontWeight: 'bold'
	    

	  
	},
	row: {
	    flexDirection: 'row',
	    justifyContent: 'space-around',
	    flex: 1,
	    marginBottom: 10
    },

    column: {
    	flexDirection: 'column',
    	justifyContent: 'center',
    	alignItems: 'center'
    },

    rowLeft: {
    	flexDirection: 'row',
    	justifyContent: 'flex-start',
    	paddingLeft: 10,
    	alignItems: 'center'
    },

	rowRight: {
	    justifyContent: 'flex-end',
	    paddingRight: 5,
	    flex: 1,
	    flexDirection: 'row',
	},

	rowCenter:{
	    flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	    marginBottom: 5,

	},

	whiteText: {
		color: "white"
	},
	blueText: {
		color: colors.blue
	}

})

export {baseStyle}