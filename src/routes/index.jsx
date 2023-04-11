import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cadastro from "/src/pages/cadastro";
import HomeScreen from "/src/pages/home";
import LoginScreen from "/src/pages/login";



export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen}/>

          <Stack.Screen name="Home" component={HomeScreen}/>

          <Stack.Screen name="Cadastro" component={Cadastro}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  );
} 
