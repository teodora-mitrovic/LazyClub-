import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../style/base.js'



const forms = StyleSheet.create({

	formWrapper: {
	    borderRadius: 5,
	    backgroundColor: 'rgba(2, 82, 132, 0.8)',
	    width: '90%',
	    height: '50%',
	    alignItems: 'center', 
	    justifyContent: 'center',
  },

  input: {
    height: 50,
    width: '70%',
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 5, 

  },
  inputAllBorders:{
    borderWidth: 1,

  },
  inputBorderBottom: {
  	borderBottomWidth: 1,
    height: 25,

  },

  inputWhite: {
    borderColor: "white",
  },
  inputBlue: {
    borderColor: colors.blue,

  },
  button: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
    
  },
  buttonText:{
    color: "white"
  },

  title: {
    marginBottom: 35,
    fontWeight: "bold", 
    fontSize: 30

  },
  titleWhite: {
    color: 'white'
  },
  titleBlue: {
    color: colors.blue,

  },

  titleWhite: {
    color: "white",
  },

  titleSmall: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5
  }


})

export {forms}