import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({onPress, text, type = "PRIMARY", newWidth ,bgColor, fgColor}) =>{
    return(
        <Pressable onPress ={onPress} 
        style = {[styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
        newWidth ? {width: newWidth} : {}
    ]}>
            <Text style= 
            {[styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {}
            ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create ({
    container: {

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY:{
        backgroundColor: '#2554C7',
    },
    container_TERTIARY:{

    },
    text: {
        fontWeight: 'bold',
        color: 'black',
    },
    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;