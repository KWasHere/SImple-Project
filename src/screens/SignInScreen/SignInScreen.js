import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';

import ComdeltaLogo from '../../../assets/ComdeltaLogo.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {

        const [username, setUsername] =useState('');
        const [password, setPassword] =useState('');

        const {height} = useWindowDimensions();

        const onSignInPressed = () =>{
             console.warn("You're Logged in!");
                };

        const onForgotPasswordPressed = () =>{
            console.warn("You forgot your password???");
        };

        const onSignInFacebook = () =>{
            console.warn("You're logged in using Facebook account!");
               };

        const onSignInGoogle = () =>{
                console.warn("You're logged in using Google account!");
                   };

        const onSignInApple = () =>{
                    console.warn("You're logged in using Apple id!");
                       };

        const onSignUpPressed = () =>{
                        console.warn("You will be directed to the signup page");
                           };

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Image source={ComdeltaLogo} 
            style ={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"/>
                <CustomInput 
                    placeholder="Username" 
                    value ={username} 
                     setValue={setUsername} />
                <CustomInput 
                     placeholder="Password" 
                    value ={password} 
                    setValue={setPassword}
                    secureTextEntry />
                        <CustomButton 
                        text= "Sign In"
                        onPress={onSignInPressed}
                        newWidth="40%" />

                        <CustomButton 
                        text= "Forgot Password?"
                        onPress={onForgotPasswordPressed} 
                        type ="TERTIARY" />

                        <CustomButton 
                        text= "Sign In with Facebook"
                        onPress={onSignInFacebook}
                        bgColor="#E7EAF4"
                        fgColor="#4765A9" />

                         <CustomButton 
                        text= "Sign In with Google"
                        onPress={onSignInGoogle} 
                        bgColor="#FAE9EA"
                        fgColor="#DD4D44" />

                         <CustomButton 
                        text= "Sign in with Apple"
                        onPress={onSignInApple} 
                        bgColor="#e3e3e3"
                        fgColor="#363636" />

                        <CustomButton 
                        text= "Don't have an account? Create one"
                        onPress={onSignUpPressed} 
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
    logo:{
        width: '70%',
        maxWidth: 300,
        height: 200,
        margin: 15,
    },
});

export default SignInScreen