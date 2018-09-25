import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  render() {
    return (

      <View style={{marginTop: 120}}>
      <TextInput
          style={{height: 40, borderWidth: 1,margin: 10, textAlign: 'center', borderRadius: 20}}
          placeholder="Email"
        />

      <TextInput
          style={{height: 40, borderWidth: 1, margin: 10, textAlign: 'center', borderRadius: 20}}
          placeholder="******"
        />

        <TouchableOpacity
        style={{width: 100 ,height: 35, margin: 10, alignSelf: 'center', borderRadius: 20,backgroundColor: '#48BBEC'}}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>

  <Image
  style={{width: 320, height: 480}}
   source={require('./paper.jpg')}

     />

      </View>

    );
  }
}
