import React from 'react';
import {View, ScrollView, Modal, Text, TouchableOpacity, TextInput, StatusBar, Switch, ActivityIndicator, Alert} from 'react-native';
import {modals} from '../components/modals/style.js';
import {buttons} from '../components/buttons/style.js';
import {baseStyle} from '../style/base.js';
import {forms} from '../components/forms/style.js';
import { Dropdown } from 'react-native-material-dropdown';
import {withNavigation} from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {saveProject} from '../API/projectAPI.js'

import CustomButton from '../components/buttons/CustomButton.js'
import DateTimePicker from 'react-native-modal-datetime-picker';
import SelectMultiple from 'react-native-select-multiple';


class AddProject extends React.Component{
  
   constructor(props)
   {
    super(props);
    this.state = {
       selectedPositions: [],
       name: '',
       location: '',
       language: '',
       sector: '',
       end_date: '',
       start_date: '',
       description: ''

    }
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

   setEndDate = (text) =>{
    this.setState({end_date:text})
  }

   setStartDate = (text) =>{
    this.setState({start_date:text})
  }

   setSector = (text) =>{
    this.setState({sector:text})
  }




  onSelectionsChange = (selectedPositions) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedPositions })
  } 

  submitProject() {


    var data = {
      "project_new_location": this.state.location,
      "project_new_language": this.state.language,
      "project_new_name": this.state.name,
      "project_new_sector": this.state.sector,
      "project_new_end_date": this.state.end_date,
      "project_new_start_date": this.state.start_date,
      "project_new_description": this.state.description
  };
  

    this.props.saveProject(data, this.props.data_login.access_token);

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
                                     onPress={()=>this.props.navigation.navigate('Projects')}>
                        <Text style={buttons.buttonTextBlue}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity style={[buttons.button, {color: 'blue'}]}
                                     onPress={()=>this.submitProject()}>
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
          <View style={[baseStyle.container]}>
                              
            <ScrollView>
              <View style={modals.modalWrapper}>

                <View style={modals.form}>
                  <Text style={[modals.title, forms.titleBlue, {marginBottom: 10, textAlign:'left'}]}>Add project</Text>


                   <StatusBar hidden={false} barStyle="dark-content"/>

                    <TextInput placeholder="Project name"
                                style={[modals.input]}
                                  onChangeText={(text) => this.setName(text)}>
                    </TextInput>
                    <TextInput placeholder="Description"
                               style={[modals.input]}
                                 onChangeText={(text) => this.setDescription(text)}>
                    </TextInput>

                    <TextInput placeholder="Sector"
                               style={[modals.input]}
                                 onChangeText={(text) => this.setSector(text)}>
                    </TextInput>

                    <TextInput placeholder="Location"
                               style={[modals.input]}
                                 onChangeText={(text) => this.setLocation(text)}>
                    </TextInput>
                    {/*}
                    <TextInput placeholder="Team name"
                               style={[modals.input]}>
                    </TextInput> */}

                    <TextInput placeholder="Start date"
                               style={[modals.input]}
                                 onChangeText={(text) => this.setStartDate(text)}>
                    </TextInput>

                    <TextInput placeholder="End date"
                               style={[modals.input]}
                                 onChangeText={(text) => this.setEndDate(text)}>
                    </TextInput>

                    <Dropdown
                              label='Select language'
                              data={data}
                              containerStyle={{width: '90%'}}
                                onChangeText={(value) => this.setLanguage(value)}/>

                    {/*
                    <View style={{width:'90%', justifyContent: 'flex-start',
                                  marginTop: 15}}>
                      <Text style={{color: '#ddd'}}>Choose team positions</Text>
                      <SelectMultiple
                        items={positions}
                        selectedItems={this.state.selectedPositions}
                        style={{marginTop: 5, marginBottom: 10}}
                        onSelectionsChange={this.onSelectionsChange} /> 
                    
                    </View> */}
                    

                  
                </View>
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
          'Project saved!',
          [
            
            {text: 'OK', onPress: () =>  this.props.navigation.navigate('Projects') },
          ],
          {cancelable: false},
        );
      
        
       
      } 

  }

}



const mapStateToProps = (state) => {
    return {
        isLoading: state.SaveProjectReducer.isLoading,
        isSaved: state.SaveProjectReducer.isSaved,
        data: state.SaveProjectReducer.data,
        data_login: state.LoginReducer.data,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ saveProject }, dispatch)
    }
}
 
const AddProjectContainer = connect(mapStateToProps, mapDispatchToProps)(AddProject);

export default withNavigation(AddProjectContainer);
 




