import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View, Dimensions, ScrollView, StyleSheet, StatusBar, Text,
        TouchableHighlight, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import {baseStyle} from '../style/base.js';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {home} from '../API/homeAPI';

import Loader from '../components/Loader.js';
import Separator from '../components/Separator.js';
import EventCard from '../components/cards/EventCard.js';
import PeopleCard from '../components/cards/PeopleCard.js';
import ProjectCard from '../components/cards/ProjectCard.js';
import SectionTitle from '../components/SectionTitle.js';
import Carousel from 'react-native-snap-carousel';



class Home extends React.Component{
  

  constructor(props){
    super(props);
    this.state={
      refreshing:false
    }
    
  }

  componentDidMount() {
    
    this.props.home(this.props.data_login.access_token);
    
  }
  
  renderEvent(event) {
        console.log(event);
        return (
          <EventCard data = {event.item}
                     navigation={this.props.navigation} />
        )

  }

  renderProject(project) {
    return (
      <ProjectCard data = {project.item}
                   navigation = {this.props.navigation}/>
      )
  }

  renderUser(user) {
    return (
      <PeopleCard size="small" data = {user.item} navigation={this.props.navigation}/>

      )
  }

  _onRefresh = ()=> {
    this.setState({refreshing: true});
    this.props.home(this.props.data_login.access_token);
    this.setState({refreshing:false})

  }


  get returnView() {
    return (
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

              <SectionTitle color="blue" title= "Events"/>
              <TouchableHighlight onPress={()=>{this.props.navigation.navigate("Events")}}>
                <Text style={{textAlign: 'right'}}>See all</Text>

              </TouchableHighlight>
              <Separator/>
              
              <Carousel
                 ref={(ce) => { this.carousel = ce; }}
                  data= {this.props.data.events}  
                  renderItem={this.renderEvent.bind(this)}
                  layout={'default'}
                  itemWidth={310}
                  inactiveSlideScale={0.9}

                  sliderWidth={Dimensions.get('window').width}

                  contentContainerCustomStyle={{justifyContent:'center'}}
    
              /> 
              <Separator/>
            
              <SectionTitle color="blue" title="Projects"/>
              <TouchableHighlight onPress={()=>{this.props.navigation.navigate("Projects")}}>
              <Text style={{textAlign: 'right'}}>See all</Text>
              </TouchableHighlight>

              <Separator/>
              
              <Carousel
                  ref={(cp) => { this.carousel = cp; }}
                  data= {this.props.data.projects}  
                  renderItem={this.renderProject.bind(this)}
                  layout={'default'}
                  itemWidth={310}
                  sliderWidth={Dimensions.get('window').width}
                  inactiveSlideScale={0.9}
                  contentContainerCustomStyle={{justifyContent:'center'}}
      
              /> 
              <Separator/>
            

              <SectionTitle color="blue" title="People"/>
              <TouchableHighlight onPress={()=>{this.props.navigation.navigate("People")}}>
               <Text style={{textAlign: 'right'}}>See all</Text>
              </TouchableHighlight>
                 <Carousel
                    ref={(cu) => { this.carousel = cu; }}
                    data= {this.props.data.users}  
                    renderItem={this.renderUser.bind(this)}
                    layout={'default'}
                    itemWidth={110}
                    sliderWidth={Dimensions.get('window').width}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    activeSlideAlignment={'center'}

                    contentContainerCustomStyle={{justifyContent:'center', overflow: 'hidden', width: 110 * this.props.data.users.length}}
        
                /> 
                  
              
            </View>
      
        </ScrollView>
      </View>
      )
  }


  get loader() {
    return (
      <Loader/>
    )
  }

  
 
  render(){

    if(this.props.data==undefined) {
      return (
        <ActivityIndicator size="small" color="#00ff00" />
        )
    }

    if(this.props.isLoading) {
      return (
        <Loader/>
      )
    }
    
    return (!this.props.data.events && !this.props.data.projects && !this.props.data.users) ? this.loader : this.returnView;
    
    
    
  }

}



const mapStateToProps = (state) => {
    return {
      isLoading: state.HomeReducer.isLoading,
      error: state.HomeReducer.error,
      data: state.HomeReducer.data,
      data_login: state.LoginReducer.data
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ home }, dispatch)
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withNavigation(HomeContainer);