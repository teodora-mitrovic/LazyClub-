import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View, ScrollView, StatusBar, Text, TouchableHighlight} from 'react-native';


import {baseStyle, colors, fonts} from '../style/base.js';
import SectionTitle from '../components/SectionTitle.js';
import EditButton from '../components/buttons/EditButton.js';
import ProfileDetails from '../components/profile/ProfileDetails.js';
import ProfileInfo from '../components/profile/ProfileInfo.js';
import Experience from '../components/profile/Experience.js';
import Education from '../components/profile/Education.js';
import Bio from '../components/profile/Bio.js';
import {buttons} from '../components/buttons/style.js';
import {user} from '../API/userAPI.js'
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Loader from '../components/Loader.js';




class Profile extends React.Component{

    
  constructor(props){
    super(props);
    
    
  }


  componentDidMount(){
    const { navigation } = this.props;
    var id = navigation.getParam('id', 'NO-ID');
    this.props.user(id, this.props.data_login.access_token);
  }


  

  render(){
    if(this.props.isLoading){
      return (
        <Loader/>
        )
    }

    return(
     	
    <View style={baseStyle.container}>
		<ScrollView >
			<StatusBar hidden={false} barStyle="dark-content"/>
			
      <View style={baseStyle.contentContainer}>
      
    
       <ProfileInfo name = {this.props.data.name} surname={this.props.data.surname}
                    position = {this.props.data.position} sector={this.props.data.sector}
                    email = {this.props.data.email}/>
       
        <View style={[baseStyle.section, {justifyContent:'center'}]}>
          <ProfileDetails />
        </View>

        <SectionTitle color="blue" title="Bio"/>
        <View style={[baseStyle.section, {height: 100}]}>
        
          <Bio bio={this.props.data.bio}/>
        </View>

{/*       <SectionTitle color="blue" title="Education"/>
        <View style={[baseStyle.section]}>
          <Education/>
          <View style={[baseStyle.rowRight]}>
              <CustomButton text="Add" textColor="white"/>
          </View>
        </View>

        <SectionTitle color="blue" title="Experience"/>
        <View style={[baseStyle.section]}>
          <Experience/>
          <View style={[baseStyle.rowRight]}>
              <CustomButton text="Add" textColor="white"/>
          </View>
        </View> */}

      </View>
      
    
					
		</ScrollView>



    </View>
		
      )
  }

}






const mapStateToProps = (state) => {
    return {
        isLoading: state.UserReducer.isLoading,
        data: state.UserReducer.data,
        data_login: state.LoginReducer.data,
        user_id: state.HomeReducer.data.user.id
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ user }, dispatch)
    }
}
 
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withNavigation(ProfileContainer);
 


