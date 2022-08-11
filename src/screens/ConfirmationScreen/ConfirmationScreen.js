import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmationScreen = () => {

        const [code, setCode] =useState('');
        const navigations = useNavigation();

        const onConfirmPressed = () =>{
            navigations.navigate('HomeScreen');
                };

        const onResendPressed = () =>{
                    console.warn("Code will be resend to your email");
                       };

         const onSignInPressed = () =>{
            navigations.navigate('SignInScreen');
                           };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>
            <Text style ={styles.title}>Confirm your email</Text>
                <CustomInput 
                    placeholder="Insert confirmation code" 
                    value ={code} 
                     setValue={setCode} />

                        <CustomButton 
                        text= "Confirm"
                        onPress={onConfirmPressed}
                        newWidth="40%" />

                        <CustomButton 
                        text= "Resend Code"
                        onPress={onResendPressed} 
                        newWidth="40%"
                        type ="SECONDARY" />

                        <CustomButton 
                        text= "Back to sign in Page"
                        onPress={onSignInPressed} 
                        type ="TERTIARY" />

        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
});

export default ConfirmationScreen;