import React from 'react';
import {View, ImageBackground, TouchableOpacity, Image, Alert} from 'react-native';
import {cards} from '../cards/style.js';
import { Icon } from 'react-native-elements';
import { ImagePicker,  Permissions  } from 'expo';

export default class Profilepicture extends React.Component{
   
  constructor(props){
  	super(props)
    this.state ={
      imgURL:  '../../../assets/user_icon.png'
    }
  }



   buttonPressed = async () => {
    
    
    const result2 = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
      let result3 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });


      if (!result3.cancelled) {
          this.setState({ imgURL: result3.uri });
    }
  }




  render(){
    return (
          <View>{this.image()}</View>

      )

  }

  image(){
    if(this.props.size=='large'){
      if(this.props.upload=='true') {
        return (

        <View>
           
        {/*   <Image source={{uri: this.state.imgURL}}
                 style={[cards.cardImageLG, {borderRadius: 100/2}]} />
        */}
          <ImageBackground style={cards.cardImageLG}
               source={require('../../../assets/user_icon.png')}
               imageStyle={{borderRadius: 100 / 2}}>
       
          </ImageBackground>
          
          <TouchableOpacity style={{position: 'absolute', top: 40, left: 35}}
                            onPress={this.buttonPressed}>
            <Icon
              name='camera'
              type='font-awesome'
              color='white' />
          </TouchableOpacity>
        </View>
         

        )
      }
      else {
        return (
        <ImageBackground style={cards.cardImageLG}
               source={require('../../../assets/user.png')}

               imageStyle={{borderRadius: 100 / 2}}>
       
        </ImageBackground>
      
        )
      }
      
    }
    else {
      return (
        <ImageBackground style={cards.cardImageMD}
               source={require('../../../assets/user.png')}
               imageStyle={{borderRadius: 80 / 2}}>
      </ImageBackground>
    )
    }
  }

  

}


