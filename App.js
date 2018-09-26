import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image, TouchableOpacity, AppRegistry, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
  render() {
    return (


      <View style={{marginTop: 80}}>

      <Image
      style={{width: 80, height: 80, alignSelf: 'center'}}
      source={require('./git.png')}/>

      <TextInput style={estilo.caixa}
        placeholder="Email"/>

        <TextInput secureTextEntry={true} style={estilo.caixa}
          placeholder="*********"/>

        <TouchableOpacity style={estilo.but}>
        <Text style={estilo.texto}>Login</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

  const estilo = StyleSheet.create({

  but: {
    width: 100, height: 35, margin: 10, alignSelf: 'center', borderRadius: 20,backgroundColor: '#48BBEC', justifyContent: 'center'
  },
  texto: {
    color: '#fff', textAlign: 'center'
  },
  caixa: {
    height: 40, borderWidth: 1,margin: 10, textAlign: 'center', borderRadius: 20
  }

});

AppRegistry.registerComponent('Login', () => Login);
