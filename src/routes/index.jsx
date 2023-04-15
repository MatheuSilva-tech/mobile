import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import CadastroScreen from "/src/pages/cadastro";
import HomeScreen from "/src/pages/home";
import LoginScreen from "/src/pages/login";


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CadastroStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function Routes() {

  function HomeStackScreen(){
    return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
      </HomeStack.Navigator>
    )
  }

  function LoginStackScreen(){
    return (
      <LoginStack.Navigator screenOptions={{ headerShown: false }}>
        <LoginStack.Screen  name="LoginScreen" component={LoginScreen} />
      </LoginStack.Navigator>
    )
  }

  function CadastroStackScreen(){
    return (
      <CadastroStack.Navigator screenOptions={{ headerShown: false }}>
        <CadastroStack.Screen name="CadastroScreen" component={CadastroScreen} />
      </CadastroStack.Navigator>
    )
  }

  function TabScreens(){
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Cadastro" component={CadastroStackScreen} />
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Login" component={LoginStackScreen} />
        </Tab.Navigator>
    )
  }


  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="HomeMain" component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
  );
} 
