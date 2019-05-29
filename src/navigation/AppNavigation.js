import React, { Component } from 'react'
import { Text, TouchableOpacity} from 'react-native';

import { createStackNavigator,  createDrawerNavigator, 
        createBottomTabNavigator, addNavigationHelpers,  createAppContainer } from 'react-navigation'
import Login from '../pages/Login'
import Home from '../pages/Home'
import People from '../pages/People'
import Projects from '../pages/Projects'
import Project from '../pages/Project'
import Profile from '../pages/Profile'
import TeamSelection from '../pages/TeamSelection'
import ProjectApplication from '../pages/ProjectApplication'
import { connect } from 'react-redux'
import Events from '../pages/Events'
import Event from '../pages/Event'
import AddEvent from '../pages/AddEvent'
import AddProject from '../pages/AddProject'
import AddUser from '../pages/AddUser'


import Hidden from './Hidden.js'

import { Icon } from 'react-native-elements';





const DrawerStack = createDrawerNavigator({
  Home: { screen: Home },
  Profile: {screen: Profile},
  Projects: { screen: Projects },
  People: {screen: People},
  Events: { screen: Events },
  Project: {screen: Project},
  Event: { 
      screen: Event,  
      navigationOptions: {
        drawerLabel: <Hidden />
    }},
  AddEvent: {
      screen: AddEvent,
       navigationOptions: {
        drawerLabel: <Hidden />,
    }},
  AddProject: {
      screen: AddProject,
       navigationOptions: {
        drawerLabel: <Hidden />
    }},
  AddUser: {
    screen: AddUser,
    navigationOptions : {
      drawerLabel: <Hidden/>
    }},
  Project: {
      screen: Project, 
      navigationOptions: {
        drawerLabel: <Hidden />
    }},

})




const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',

  defaultNavigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
    title: 'LazyClub',
    titleStyle: {color: '#025284'},
    headerLeft: (<TouchableOpacity 
                  style={{marginLeft: 20}}
                  onPress={() => navigation.toggleDrawer()}>
                  <Icon
                    name='bars'
                    type='font-awesome'
                    color='#025284'
                  />
                </TouchableOpacity>),
    headerRight: (<TouchableOpacity 
                  style={{marginRight: 20}}>
                    <Icon
                      name='sign-out'
                      type='font-awesome'
                      color='#025284'
                    />
                </TouchableOpacity>)


  }),
})


const PrimaryNav   = createStackNavigator({
    loginStack: { screen: Login },
    drawerStack: {screen: DrawerNavigation},
}, {
  
  headerMode: 'none',
  initialRouteName: 'loginStack'
})



const App = createAppContainer(PrimaryNav);

export default App;
