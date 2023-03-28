import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

  return (
    <>
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{fontSize: '40px', color: 'red'}}> Bem Vindo</Text>
        <Text style={{fontSize: '30px'}}> Tela de Login </Text>
      </View>

      <View style={styles.viewLogin}>
        <Text style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '20px'}}> Login </Text>
        <TextInput style={styles.input} placeholder='Digite o Login'/>
        <TextInput style={styles.input} placeholder='Digite a Senha'/>
        <TouchableOpacity style={styles.botao}> Login </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.home}> Ir para Home </Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'blue'
  },
  botao: {
    border: '2px solid black',
    backgroundColor: '#00f',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
    marginTop: '20px'
  },
  input: {
    border: '2px solid green',
    padding: '10px',
    margin: '10px',
    width: '70vw'
  },
  viewLogin: {
    flex: 0.9,
    alignItems: 'center',
    marginTop: '40px'
  },
  home: {
    border: '2px solid black',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: '#8e8e8e',
    color: 'white'
  }
});