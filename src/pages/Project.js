import React from 'react';
import renderIf from '../functions/renderIf.js';
import {View, ScrollView, StatusBar, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {project} from '../API/projectAPI';


import {baseStyle, colors, fonts} from '../style/base.js';
import SectionTitle from '../components/SectionTitle.js';
import ProjectDetails from '../components/project/ProjectDetails.js';
import About from '../components/project/About.js';
import EditButton from '../components/buttons/EditButton.js';
import Loader from '../components/Loader.js';
import {buttons} from '../components/buttons/style.js';

import Team from '../components/project/Team.js';


class Project extends React.Component{
  
  constructor(props){
    super(props);
    
  }


  componentDidMount() {
    const { navigation } = this.props;
    var id = navigation.getParam('id', 'NO-ID');
    this.props.project(id, this.props.data_login.access_token);
  }
  

  render(){


  

    if(this.props.data.project!=undefined) {
       return(
      
      <View style={baseStyle.container}>
        <ScrollView >
          <StatusBar hidden={false} barStyle="dark-content"/>
      
          <View style={baseStyle.contentContainer}>

            <SectionTitle color="blue" title={this.props.data.project.name}/>
            <View style={baseStyle.section}>
             <ProjectDetails data = {this.props.data.project}/>
            </View>

            <SectionTitle color="blue" title="About"/>
            <View style={[baseStyle.section, {height: 100}]}>
              <About description = {this.props.data.project.description}/>
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
      isLoading: state.ProjectReducer.isLoading,
      error: state.ProjectReducer.error,
      data: state.ProjectReducer.data,
      data_login: state.LoginReducer.data
  }
};


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ project }, dispatch)
    }
}

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);

export default withNavigation(ProjectContainer);
