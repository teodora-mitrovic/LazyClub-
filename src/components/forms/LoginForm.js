import React from 'react';
import {View, Text, TextInput, TouchableHighlight, 
        StyleSheet, ImageBackground, ActivityIndicator} from 'react-native';
import {forms} from './style.js';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {login} from '../../API/loginAPI.js';


class LoginForm extends React.Component{
  constructor(props){

    super(props);
    this.state = { email: 'bla',
                  password: 'bla',
                  token_error: ''
                 };
  }

  setUsername = (text) =>{

    this.setState({email:text})

  }

  setPassword = (text) =>{

    this.setState({password:text})

  }

  login() {

    this.props.login(this.state.email, this.state.password);

     
  }

  renderLoader(){
    if(this.props.isLoading){
      return ( 
        <ActivityIndicator size="small" color="white" />
        )
    }
         
      else {
        return (<TouchableHighlight style={forms.button}
                                onPress={()=>this.login()}
            >
              <Text style={forms.buttonText}>Login</Text>
            </TouchableHighlight> )
      }
      
    
  }

  render(){


    return(
      
          <View style={[forms.formWrapper]}>
            <Text style={[forms.title, forms.titleWhite]}>Club | LazyBrain</Text>
            <TextInput
              style={[forms.input, forms.inputWhite, forms.inputAllBorders]}
              placeholder="Email"
              placeholderTextColor="#025284"
              underlineColorAndroid='rgba(0,0,0,0)'
              onChangeText={(text) => this.setUsername(text)}

            />
            <TextInput
              style={[forms.input, forms.inputWhite, forms.inputAllBorders]}
              placeholder="Password"
              placeholderTextColor="#025284"
              underlineColorAndroid='rgba(0,0,0,0)'
              secureTextEntry
              onChangeText={(text) => this.setPassword(text)}

            />
            {this.renderLoader()}
            <Text style={{color:'red', marginTop: 10}}>{this.props.error}</Text>
          </View>

      )
  }


  componentDidUpdate() {
     if(this.props.isLoggedIn){
        this.props.navigation.navigate('drawerStack');
        
       
      } 

        
  }

}



 
const mapStateToProps = (state) => {
    return {
      isLoading: state.LoginReducer.isLoading,
      error: state.LoginReducer.error,
      data: state.LoginReducer.data,
      isLoggedIn: state.LoginReducer.isLoggedIn,
  }
};


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
     
      login, 

    },
    dispatch,
  ),
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default withNavigation(LoginContainer);