import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View, ScrollView, StatusBar, Text, TouchableHighlight, ActivityIndicator, AsyncStorage} from 'react-native';
import {baseStyle, colors, fonts} from '../style/base.js';
import {buttons} from '../components/buttons/style.js';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {event} from '../API/eventAPI';


import CustomButton from '../components/buttons/CustomButton.js';
import EditButton from '../components/buttons/EditButton.js';

import SectionTitle from '../components/SectionTitle.js';
import EventDetails from '../components/event/EventDetails.js';
import About from '../components/event/About.js';
import Loader from '../components/Loader.js';




class Event extends React.Component{
  
  constructor(props){
    super(props);
    
  }


  componentDidMount() {

    const id = this.props.navigation.getParam('id', 'NO-ID');      
    this.props.event(id, this.props.data_login.access_token);
        

  }


  
  render(){


    if(this.props.data.event!=undefined){
      return(
  
    <View style={baseStyle.container}>
    <ScrollView >
      <StatusBar hidden={false} barStyle="dark-content"/>
      
      
      <View style={baseStyle.contentContainer}>
   
        
        <SectionTitle color="blue" title={this.props.data.event.name}/>

    
        <View style={baseStyle.section}>
        <EventDetails data={this.props.data.event}/>
        </View>

        <SectionTitle color="blue" title="About"/>
        <View style={[baseStyle.section, {height: 100}]}>
          <About description = {this.props.data.event.description}/>
        </View>
      </View>

     
          
    </ScrollView>
 
    </View> 
    
      )
     
    }


   return (
        <Loader/>
    )

     
  }


  
}


const mapStateToProps = (state) => {
    return {
      isLoading: state.EventReducer.isLoading,
      error: state.EventReducer.error,
      data: state.EventReducer.data,
      data_login: state.LoginReducer.data,
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ event }, dispatch)
    
    }
}

const EventContainer = connect(mapStateToProps, mapDispatchToProps)(Event);

export default withNavigation(EventContainer);




