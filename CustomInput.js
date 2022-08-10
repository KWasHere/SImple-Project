import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';

const customInput = ({value, setValue, placeholder, secureTextEntry }) =>{
    return (
        <View style ={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style ={styles.input} 
            secureTextEntry={secureTextEntry}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E4E2",
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {},
});

export default customInput;