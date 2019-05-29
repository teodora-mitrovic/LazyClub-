import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View,  Modal, TouchableOpacity, ScrollView, StatusBar, Text, FlatList, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipeout from 'react-native-swipeout';


import {users} from '../API/usersAPI.js';
import {deleteUser} from '../API/userAPI.js';

import {modals} from '../components/modals/style.js';
import {baseStyle, colors, fonts} from '../style/base.js';
import PeopleCard from '../components/cards/PeopleCard.js';
import SectionTitle from '../components/SectionTitle.js';
import AddButton from '../components/buttons/AddButton.js';
import Loader from '../components/Loader.js';




class People extends React.Component{
   
  constructor(props){
    super(props);

    
  }


  componentDidMount() {
    this.props.users(this.props.data_login.access_token);
  }



  deleteUser(user) {

        Alert.alert(
          'Alert',
          'Delete '+user.name+' '+user.surname+' ?',
          [
            
            {text: 'OK', onPress: () =>  this.props.deleteUser(user.id, this.props.data_login.access_token) },
          ],
          {cancelable: false},
        );
  }

  renderUser(item) {
        var swipeoutBtns = [
          {
            text: 'Delete',
            backgroundColor: 'red',
            onPress: ()=>{this.deleteUser(item)}
          }
      ]
    return (
      <Swipeout right={swipeoutBtns} backgroundColor='transparent'>

      <PeopleCard navigation = {this.props.navigation}
                  page = "People"
                  size = "small"
                  data = {item} />
      </Swipeout>
      )
  }
 

  render(){

    if(this.props.isLoading) {
      return (
        <Loader/>
        )
    }
    return(
		
		<View style={[baseStyle.container] }>
		<ScrollView >
			<StatusBar hidden={false} barStyle="dark-content"/>
		
	    <View style={baseStyle.contentContainer}>

        <SectionTitle color="blue" title="People"/>

        <View style={baseStyle.section}>
        
          <FlatList
            data = {this.props.data.users}
            renderItem = {({item}) => this.renderUser(item)}
            keyExtractor = {(item, index) => item.id+""}
          >


          </FlatList>


        </View>

      </View>
        
	     

	    </ScrollView>
      <View style={modals.addButton} >
          
      <AddButton page="AddUser" navigation={this.props.navigation}/>
      </View>
      
	    </View>

      )
  }

}


const mapStateToProps = (state) => {
  return {
        error: state.UsersReducer.error,
        data: state.UsersReducer.data,
        isLoading: state.UsersReducer.isLoading,
        isDeleted: state.DeleteUserReducer.isDeleted,
        data_login: state.LoginReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
        ...bindActionCreators({ users }, dispatch),
        ...bindActionCreators({ deleteUser }, dispatch)

    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default withNavigation(PeopleContainer);