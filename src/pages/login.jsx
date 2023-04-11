import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const navigation = useNavigation();

  return (
    <>
    <View style={{flex: 1, backgroundColor: '#5F9EA0'}}>
      <View style={styles.container}>
        <Text style={{fontSize: '40px', color: 'white'}}> Bem Vindo</Text>
        <Text style={{fontSize: '30px', color: 'white'}}> Tela de Login </Text>
      </View>

      <View style={styles.viewLogin}>
        <Text style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: 'white'}}> Login </Text>
        <TextInput style={styles.input} placeholder='Digite o Login'/>
        <TextInput style={styles.input} placeholder='Digite a Senha'/>

        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.botao}> login </Text>
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
  },
  botao: {
    backgroundColor: '#088F8F',
    paddingHorizontal: 120,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
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
    marginTop: '40px',
  },
  home: {
    border: '2px solid black',
    padding: '10px',
    marginTop: '20px',
    color: 'white'
  }
});