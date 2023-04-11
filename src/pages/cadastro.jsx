import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native-web";


export default function Cadastro() {

    const navigation = useNavigation();
    const [atv, setAtv] = useState()
    const [atividade, setAtividade] = useState([
        {
            atividade: "ler um e-book"
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

            <TouchableOpacity onPress={() => inserir()} ><Text style={styles.clickme}>Click-me</Text></TouchableOpacity>

            {
                atividade.map((atv => (
                    <Text style={styles.item}>{atv.atividade}</Text>
                    
                )
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        padding: 10,
        margin: 10,
        borderBottomWidth: 2
    },
    clickme: {
        backgroundColor: '#088F8F',
        maxWidth: '20%',
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 30
    },
    item: {
        marginLeft: 10
    }

})