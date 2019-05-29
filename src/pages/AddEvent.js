import React from 'react';
import {View,  Text, TouchableOpacity, TextInput, StatusBar, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {modals} from '../components/modals/style.js';
import {buttons} from '../components/buttons/style.js';

import {baseStyle} from '../style/base.js';
import {forms} from '../components/forms/style.js';
import { Dropdown } from 'react-native-material-dropdown';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {saveEvent} from '../API/eventAPI.js'
import CustomButton from '../components/buttons/CustomButton.js'


class AddEvent extends React.Component{

  

   constructor(props)
   {
    super(props);
    this.state = {
       isDatePickerVisible: false,
       isTimePickerVisible: false,
       date: null,
       time: null,
       name: '',
       description: '',
       location: '',
       language: ''
    }
  }


  
  submitEvent() {

    //gether data
    var data = {
      "event_new_name": this.state.name,
      "event_new_description": this.state.description,
      "event_new_location": this.state.location,
      "event_new_language": this.state.language,
      "event_new_date": this.state.date,
      "event_new_time": this.state.time
    };
   

    console.log(data);

    this.props.saveEvent(data, this.props.data_login.access_token);

    //reducer

  }




  setDate = (text) =>{
    this.setState({date:text})
  }

  setTime = (text) =>{
    this.setState({time:text})
  }

  setName = (text) =>{

    this.setState({name:text})

  }

  setDescription = (text) =>{

    this.setState({description:text})

  }

  setLocation = (text) =>{

    this.setState({location:text})

  }

  setLanguage = (value) => {
    this.setState({language:value})
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
                                     onPress={()=>this.submitEvent()}>
                        <Text style={buttons.buttonTextBlue}>Save</Text>
                      </TouchableOpacity>
                    </View>

                </View> )
      }
      
    
  }


  render(){

     let data = [{
      value: 'English',
    }, {
      value: 'Serbian',
    
    }];

    return(

        
        <View style={modals.modalWrapper}>
          <ScrollView>
            <StatusBar hidden={false} barStyle="dark-content"/>

            <View style={modals.form}>
                <Text style={[modals.title, forms.titleBlue, {marginBottom: 10}]}>Add event</Text>


                
                <TextInput placeholder="Event name"
                            style={[modals.input]}
                            onChangeText={(text) => this.setName(text)}>
                </TextInput>
                <TextInput placeholder="Description"
                           style={[modals.input]}
                           onChangeText={(text) => this.setDescription(text)}>
                </TextInput>

                <TextInput placeholder="Location"
                           style={[modals.input]}
                           onChangeText={(text) => this.setLocation(text)}>
                </TextInput>

                <TextInput placeholder="Date"
                           style={[modals.input]}
                           onChangeText={(text) => this.setDate(text)}>
                </TextInput>

                <TextInput placeholder="Time"
                           style={[modals.input]}
                           onChangeText={(text) => this.setTime(text)}>
                </TextInput>
                

                <Dropdown
                          label='Select language'
                          data={data}
                          containerStyle={{width: '90%'}}
                          onChangeText={(value) => this.setLanguage(value)}/>

             



            </View>
          </ScrollView>

          {this.renderLoader()}
        </View>
    
      )
  }

  componentDidUpdate() {
     if(this.props.isSaved){
     

        Alert.alert(
          'Alert',
          'Event saved!',
          [
            
            {text: 'OK', onPress: () =>  this.props.navigation.navigate('Events') },
          ],
          {cancelable: false},
        );
        
       
      } 

        
  }

}



const mapStateToProps = (state) => {
    return {
        isLoading: state.SaveEventReducer.isLoading,
        isSaved: state.SaveEventReducer.isSaved,
        data: state.SaveEventReducer.data,
        data_login: state.LoginReducer.data,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ saveEvent }, dispatch)
    }
}
 
const AddEventContainer = connect(mapStateToProps, mapDispatchToProps)(AddEvent);

export default withNavigation(AddEventContainer);
 




