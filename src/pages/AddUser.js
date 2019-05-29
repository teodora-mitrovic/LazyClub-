import React from 'react';
import {View,  Text, TouchableOpacity, TextInput, StatusBar, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {modals} from '../components/modals/style.js';
import {buttons} from '../components/buttons/style.js';

import {forms} from '../components/forms/style.js';
import { Dropdown } from 'react-native-material-dropdown';
import {baseStyle} from '../style/base.js';
import CustomButton from '../components/buttons/CustomButton.js'
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {saveUser} from '../API/userAPI.js'



class AddUser extends React.Component{
  
   constructor(props)
   {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      username: '',
      position: '',
      sector: ''

    }
  }

  setName = (text) =>{
    this.setState({name:text})
  }

  setSurname = (text) =>{
    this.setState({surname:text})
  }

  setEmail = (text) =>{

    this.setState({email:text})

  }

  setPosition = (text) =>{

    this.setState({position:text})

  }

  setSector = (text) =>{

    this.setState({sector:text})

  }

  setUsername = (text) =>{

    this.setState({username:text})

  }


  submitUser() {
    var data = {
      'firstName': this.state.name,
      'lastName': this.state.surname,
      'email': this.state.email,
      'user_sector': this.state.sector,
      'user_position': this.state.position,
      'username': this.state.username

    };
    

    this.props.saveUser(data, this.props.data_login.access_token);

  }

  renderLoader(){
    if(this.props.isLoading){
      return ( 
        <View style={{height:50, flex:1, justifyContent:'center'}}>
          <ActivityIndicator size="small" color="blue" />
        </View>
        )
    }
         
      else {
        return (<View style={[baseStyle.rowCenter, {width:'100%',
                        borderTopWidth:1, borderColor:'#ddd',
                        backgroundColor: 'white', height: 50 }]}>
              
                    <View>
                      <TouchableOpacity style={[buttons.button, {color: 'blue'}]}
                                     onPress={()=>this.props.navigation.navigate('Events')}>
                        <Text style={buttons.buttonTextBlue}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity style={[buttons.button, {color: 'blue'}]}
                                     onPress={()=>this.submitUser()}>
                        <Text style={buttons.buttonTextBlue}>Save</Text>
                      </TouchableOpacity>
                    </View>

                </View> )
      }
      
    
  }

  render(){

     let sector = [{value: 'HR'}, {value: 'PR'},
                    { value: 'CR' },{ value: 'IT'}];

     let sysRoles = [{value: 'user'}, {value: 'admin'},
                  { value: 'HR' }];

    return(


      
          <View style={modals.modalWrapper}>
            <ScrollView>

            <StatusBar hidden={false} barStyle="dark-content"/>

              <View style={modals.form}>
                <Text style={[modals.title, forms.titleBlue, {marginBottom: 10}]}>Add user</Text>



                <TextInput placeholder="Name"
                           style={[modals.input]}
                            onChangeText={(text) => this.setName(text)}>
                </TextInput>
                <TextInput placeholder="Surname"
                           style={[modals.input]}
                            onChangeText={(text) => this.setSurname(text)}>
                </TextInput>
                <TextInput placeholder="Email"
                           style={[modals.input]}
                            onChangeText={(text) => this.setEmail(text)}>
                </TextInput>
                <TextInput placeholder="Username"
                           style={[modals.input]}
                            onChangeText={(text) => this.setUsername(text)}>
                </TextInput>
                <TextInput placeholder="Position"
                           style={[modals.input ]}
                            onChangeText={(text) => this.setPosition(text)}>
                </TextInput>

                <Dropdown
                          label='Select sector'
                          data={sector}
                          containerStyle={{width: '90%'}}
                           onChangeText={(value) => this.setSector(value)}/>
                {/*
                <Dropdown
                          label='Select system role'
                          data={sysRoles}
                          containerStyle={{width: '90%'}}/> */}

              </View>
              
            </ScrollView>
            {this.renderLoader()}
          </View>
    

      )
  }

  componentDidUpdate() {
    if(this.props.isSaved) {
     
         Alert.alert(
          'Alert',
          'User saved!',
          [
            
            {text: 'OK', onPress: () =>  this.props.navigation.navigate('People') },
          ],
          {cancelable: false},
        );
    }
  }

}



const mapStateToProps = (state) => {
    return {
        isLoading: state.SaveUserReducer.isLoading,
        isSaved: state.SaveUserReducer.isSaved,
        data: state.SaveUserReducer.data,
        data_login: state.LoginReducer.data,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ saveUser }, dispatch)
    }
}
 
const AddUserContainer = connect(mapStateToProps, mapDispatchToProps)(AddUser);

export default withNavigation(AddUserContainer);
 




