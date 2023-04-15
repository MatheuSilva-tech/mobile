import { useNavigation } from "@react-navigation/native";
import { useContext, useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native-web";
import { DataContext } from "../components/dataContext";


export default function CadastroScreen() {

    const navigation = useNavigation();
    const inputRef = useRef();

    const {dados, setDados} = useContext(DataContext);

    const [atv, setAtv] = useState()
    // const [atividade, setAtividade] = useState([
    //     {
    //         atividade: "ler um e-book"
    //     },
    //     {
    //         atividade: "viajar"
    //     },
    //     {
    //         atividade: "academia"
    //     }
    // ]);


    function inserir() {
        const aux = { atividade: atv }
        setDados([...dados, aux])
        inputRef.current.clear();
        inputRef.current.focus();
    }


    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} />
            <Text> Cadastrar Atividades</Text>
            <TextInput 
            style={styles.texto} 
            onChangeText={(value) => setAtv(value)} 
            maxLength={15}
            ref={inputRef}
            autoFocus={true}
            />

            <TouchableOpacity 
            onPress={() => inserir()} >
                <Text style={styles.clickme}>Click-me</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate("Home")} >
                <Text style={styles.clickme}>Ver Lista</Text>
            </TouchableOpacity>

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
    },

})