import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View,  Modal, TouchableOpacity, ScrollView, StatusBar, Text, FlatList, Alert} from 'react-native';
import {withNavigation} from 'react-navigation';
import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projects} from '../API/projectsAPI.js';
import {deleteProject} from '../API/projectAPI.js';


import {baseStyle, colors, fonts} from '../style/base.js';
import SectionTitle from '../components/SectionTitle.js';
import ProjectCard from '../components/cards/ProjectCard.js';
import AddButton from '../components/buttons/AddButton.js';
import Loader from '../components/Loader.js';
import {modals} from '../components/modals/style.js';


class Projects extends React.Component{
   
  constructor(props){
    super(props);

    
  }


  componentDidMount() {
    this.props.projects(this.props.data_login.access_token);
  }


  deleteProject(project) {
    Alert.alert(
      'Alert',
      'Delete '+project.name+' project?',
      [
        
        {text: 'OK', onPress: () =>  this.props.deleteProject(project.id, this.props.data_login.access_token)},
      ],
      {cancelable: false},
    );
  }

  renderProject(project) {
      var swipeoutBtns = [
          {
            text: 'Delete',
            backgroundColor: 'red',
            onPress: ()=>{this.deleteProject(project)}
          }
      ]
    return (
      <Swipeout right={swipeoutBtns} backgroundColor='transparent'>

        <ProjectCard data = {project} navigation = {this.props.navigation}/>
      </Swipeout>
      )

  }

  render(){

    if(this.props.isLoading) {
      return(
        <Loader/>
        )
    }

    return(
		
		<View style={baseStyle.container}>
		<ScrollView >
			<StatusBar hidden={false} barStyle="dark-content"/>
		
	     <View style={baseStyle.contentContainer}>

          <SectionTitle color="blue" title="All projects"/>
        

          <View style={baseStyle.section}>
            <FlatList
                data = {this.props.data.projects}
                renderItem = {({item}) => this.renderProject(item)}
                keyExtractor={(item,index) => item.name} >

              </FlatList>

          </View>


       </View>

	    </ScrollView>

      <View style={modals.addButton} >
          
        <AddButton page="AddProject" navigation={this.props.navigation}/>

      </View>
       
	    </View>

      )
  }

}




const mapStateToProps = (state) => {

   return {
      isLoading: state.ProjectsReducer.isLoading,
      error: state.ProjectsReducer.error,
      data: state.ProjectsReducer.data,
      isDeleted: state.DeletedProjectReducer,
      data_login: state.LoginReducer.data
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ projects }, dispatch),
        ...bindActionCreators({ deleteProject }, dispatch)

    }
}

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default withNavigation(ProjectsContainer);