import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux'
import AppNavigation from './src/navigation/AppNavigation'
import store from './src/reducers/index'





export default class App extends React.Component{
   
  render(){
    return(
		<Provider store={store}>

			<AppNavigation />
		</Provider>

      )
  }

}


