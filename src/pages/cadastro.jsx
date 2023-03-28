import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native-web";


export default function Cadastro() {

    const navigation = useNavigation();
    const [atv, setAtv] = useState()
    const [atividade, setAtividade] = useState([
        {
            atividade: "Estudar"
        },
        {
            atividade: "ler um livro"
        }
    ]);


    function inserir() {
        const aux = { atividade: atv }
        setAtividade([...atividade, aux])
        setAtv("")
    }


    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} />
            <Text> Cadastrar Atividades</Text>
            <TextInput style={styles.texto} onChangeText={(value) => setAtv(value)} />
            <TouchableOpacity onPress={() => inserir()} ><Text>Click-me</Text></TouchableOpacity>

            {
                atividade.map((atv => (
                    <Text>{atv.atividade}</Text>
                )
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        border: '2px solid blue',
        padding: '10px',
        margin: '10px',
        width: '70vw'
    }
})