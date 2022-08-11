import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {

        const [email, setEmail] =useState('');
        const navigations = useNavigation();

        const onSendPressed = () =>{
                //validate user using backend dev

            navigations.navigate('NewPasswordScreen');
        };

         const onSignInPressed = () =>{
                           //validate user using backend dev

            navigations.navigate('SignInScreen');
        };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>
            <Text style ={styles.title}>Enter email</Text>
                <CustomInput 
                    placeholder="Insert Email" 
                    value ={email} 
                     setValue={setEmail} />

                        <CustomButton 
                        text= "Send"
                        onPress={onSendPressed}
                        newWidth="40%" />

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

export default ForgotPasswordScreen;