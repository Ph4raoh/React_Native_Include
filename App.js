import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image } from 'react-native';

export default class Login extends Component {
  render() {
    return (

      <View>

      <TextInput
          style={{height: 40, borderWidth: 1}}
          placeholder="Email"
        />

      <TextInput
          style={{height: 40,  borderWidth: 1}}
          placeholder="******"
        />

    <Button
  onPress={() => {Alert.alert('');}}
  title="Login"
  color="#841584"
  />

  <Image source={require('./paper.jpg')}
     />

      </View>

    );
  }
}
