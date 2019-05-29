import React from 'react';
import {View,  Modal, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import {modals} from '../components/modals/style.js';
import {buttons} from '../components/buttons/style.js';

import {baseStyle} from '../style/base.js';
import {forms} from '../components/forms/style.js';
import { Dropdown } from 'react-native-material-dropdown';
import CustomButton from '../components/buttons/CustomButton.js'
import DateTimePicker from 'react-native-modal-datetime-picker';



export default class ProjectApplicationModal extends React.Component{
  
   constructor(props)
   {
    super(props);
  }

  


  render(){

     let data = [{
      value: 'IT',
    }, {
      value: 'HR',
    
    },
     {
      value: 'FR',
    
    }, {
      value: 'PR',
    
    }];

    return(

        
          <View style={modals.modalWrapper}>
          <StatusBar hidden={false} barStyle="dark-content"/>
          
              <View style={modals.form}>

                <Text style={[modals.title, forms.titleBlue, {marginBottom: 10}]}>Apply for position</Text>
                <View style={modals.line}></View>
                

                <Dropdown
                          label='Select position for applying'
                          data={data}
                          containerStyle={{width:'70%'}}/>

                <TextInput placeholder="Motivational letter"
                           style={[modals.input, 
                                  {marginTop: 30}]}>
                </TextInput>
                
                <View style={[baseStyle.rowCenter, {width:'100%',
                                                    borderTopWidth:1,
                                                    borderColor:'#ddd',
                                                    bottom: 5,
                                                    position: 'absolute' }]}>
                  <CustomButton 
                                text="Save"
                                textColor="blue"/>

                  <CustomButton textColor="blue"
                                text="Cancel" />

                </View>
              
              
              
            </View>
          </View>
    
      )
  }

}





