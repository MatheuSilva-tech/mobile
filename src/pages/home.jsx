import { View ,Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreen(){

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.texto}> Ir apra Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Cadastro")}>
                <Text style={styles.texto}> Cadastro de Atividades </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        border: '2px solid black',
        padding: '10px',
        marginTop: '20px',
        backgroundColor: '#8e8e8e',
        color: 'white'
    }
})
