import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {

        const navigations = useNavigation();
        const [code, setCode] =useState('');
        const [newPassword, setNewPassword] =useState('');
        const [newPasswordConfirm, setNewPasswordConfirm] =useState('');


        const onResetPressed = () =>{
                //validate user using backend dev
            navigations.navigate('SignInScreen');
            };

         const onSignInPressed = () =>{
                           //validate user using backend dev
            navigations.navigate('SignInScreen');
        };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>
            <Text style ={styles.title}>Reset your password</Text>
                <CustomInput 
                    placeholder="Insert code" 
                    value ={code} 
                     setValue={setCode} />

                <CustomInput 
                    placeholder="Insert new password" 
                    value ={newPassword} 
                     setValue={setNewPassword} />

                <CustomInput 
                    placeholder="Confirm password" 
                    value ={newPasswordConfirm} 
                     setValue={setNewPasswordConfirm} />

                        <CustomButton 
                        text= "Reset"
                        onPress={onResetPressed}
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

export default NewPasswordScreen;