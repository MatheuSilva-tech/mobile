import { View ,Text, TouchableOpacity, StyleSheet} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from "../components/dataContext";


export default function HomeScreen(){

    const navigation = useNavigation();

    const {dados, setDados} = useContext(DataContext);

    function remover(index){
        const novaLista = [...dados];
        novaLista.splice(index,1);
        setDados(novaLista);

    }

    return (
        <View>

            {
                dados.map((atv,index) => (

                    <View style={styles.viewLista}>
                        <Text style={styles.item}>{atv.atividade}</Text>
                        <TouchableOpacity style={styles.botaoRemover} onPress={()=>remover(index)}>
                            <Text> Remover </Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
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
    },
    viewLista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    botaoRemover: {
        backgroundColor: '#088f8f',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
})
