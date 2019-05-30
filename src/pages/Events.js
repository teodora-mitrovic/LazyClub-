import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View,  Modal, TouchableOpacity, ScrollView, StatusBar, 
      Text, FlatList, ActivityIndicator, RefreshControl, Alert} from 'react-native';
import Swipeout from 'react-native-swipeout';

import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {events} from '../API/eventsAPI.js';
import {deleteEvent} from '../API/eventAPI.js';


import {baseStyle, colors, fonts} from '../style/base.js';
import {cards} from '../components/cards/style.js';

import {buttons} from '../components/buttons/style.js';
import {modals} from '../components/modals/style.js';
import SectionTitle from '../components/SectionTitle.js';
import EventCard from '../components/cards/EventCard.js';
import AddButton from '../components/buttons/AddButton.js';
import Loader from '../components/Loader.js';


class Events extends React.Component{
   
  constructor(props){
    super(props);
     this.state = {
      refreshing: false
    }

   
  }

  deleteEvent(event) {
    Alert.alert(
      'Alert',
      'Delete '+event.name+' event?',
      [
        
        {text: 'OK', onPress: () =>  this.props.deleteEvent(event.id, this.props.data_login.access_token)},
      ],
      {cancelable: false},
    );
  }

  renderEvent(event) {
      var swipeoutBtns = [
          {
            text: 'Delete',
            backgroundColor: 'red',
            onPress: ()=>{this.deleteEvent(event)}
          }
      ]
  	return (
      <Swipeout right={swipeoutBtns} backgroundColor='transparent'>

  		    <EventCard navigation = {this.props.navigation} 
  					data = {event}
  					/>
       </Swipeout>
  		)
  }


  componentDidMount() {
  	this.props.events(this.props.data_login.access_token);
  }

  _onRefresh = () =>  {
    this.setState({refreshing: true});
    this.props.events(this.props.data_login.access_token);
    this.setState({refreshing:false})

  }
 

  render(){

  	if(this.props.isLoading) {
  		return (
  			<Loader />

  			)
  	}


    return(
		
		<View style={baseStyle.container}>
		<ScrollView 
       refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
    >
			<StatusBar hidden={false} barStyle="dark-content"/>
			

	        <View style={baseStyle.contentContainer}>
		        <SectionTitle color="blue" title="All events"/>

		        <View style={baseStyle.section}>
		      		<FlatList
		      			data = {this.props.data.events}
		      			renderItem = {({item}) => this.renderEvent(item)}
		      			keyExtractor={(item, index) => item.name} >

		      		</FlatList>
		        </View>

	        </View>

	    </ScrollView>

        <View style={modals.addButton} >
            
          <AddButton page="AddEvent" navigation={this.props.navigation}/>

        </View>
	    </View>

      )
  }

}


const mapStateToProps = (state) => {

	 return {
      isLoading: state.EventsReducer.isLoading,
      error: state.EventsReducer.error,
      data: state.EventsReducer.data,
      isDeleted: state.DeleteEventReducer.isDeleted,
      data_login: state.LoginReducer.data
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ events }, dispatch),
        ...bindActionCreators({ deleteEvent }, dispatch)

    }
}

const EventsContainer = connect(mapStateToProps, mapDispatchToProps)(Events);

export default withNavigation(EventsContainer);