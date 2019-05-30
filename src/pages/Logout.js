import React from 'react';
import {View, Text} from 'react-native';
import Loader from '../components/Loader';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logout} from '../API/logoutAPI.js';




class Logout extends React.Component{
   
 constructor(props){
 	super(props);
 }


componentDidMount() {
	this.props.logout(this.props.data_login.access_token);
}

  render(){

  	if(this.props.isLoading) {
  		return (
  			<Loader/>
  			)
  	}
  	
  	return(
		<View>
  		
			<Text>{this.props.navigation.navigate('Login')}</Text>
		</View>

      )
  }

}

const mapStateToProps = (state) => {

	 return {
      isLoading: state.LogoutReducer.isLoading,
      error: state.LogoutReducer.error,
      data: state.LogoutReducer.data,
      isLoggedOut: state.LogoutReducer.isLoggedOut,
      data_login: state.LoginReducer.data,
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ logout }, dispatch),

    }
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default withNavigation(LogoutContainer);


