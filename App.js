import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image, TouchableOpacity, AppRegistry, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (

      <View style={{marginTop: 120}}>


      <TextInput style={estilo.caixa}
        placeholder="Email"/>

        <TextInput secureTextEntry={true} style={estilo.caixa}
          placeholder="*********"/>

        <TouchableOpacity style={estilo.but}>
        <Text style={estilo.texto}>Login</Text>
        </TouchableOpacity>

        <Image
        style={{width: 320, height: 480}}
        source={require('./paper.jpg')}
      />

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
