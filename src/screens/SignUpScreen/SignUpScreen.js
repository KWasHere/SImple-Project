import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {

        const [username, setUsername] =useState('');
        const [email, setEmail] =useState('');
        const [password, setPassword] =useState('');
        const [passwordRepeat, setPasswordRepeat] =useState('');
        const navigations = useNavigation();

        const onRegisterPressed = () =>{
             navigations.navigate('ConfirmationScreen');
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

        const onSignInPressed = () =>{
                        navigations.navigate('SignInScreen');
                    };

        const onTermsofUsePressed = () =>{
                            console.warn("Terms of Use");
                               };

        const onPrivacyPressed = () =>{
                                console.warn("Privacy Policy");
                                   };

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Text style ={styles.title}>Create an account</Text>
                <CustomInput 
                    placeholder="Username" 
                    value ={username} 
                     setValue={setUsername} />

                <CustomInput 
                    placeholder="Email" 
                    value ={email} 
                     setValue={setEmail} />

                <CustomInput 
                    placeholder="Password" 
                    value ={password} 
                    setValue={setPassword}
                    secureTextEntry />

                <CustomInput 
                    placeholder="Confirm Password" 
                    value ={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry />

                        <CustomButton 
                        text= "Register"
                        onPress={onRegisterPressed}
                        newWidth="40%" />

                            <Text style ={styles.text}>By registering, you confirm that you accept our{' '}
                            <Text style ={styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                            </Text>

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
                        text= "Have an account? Sign in"
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
    logo:{
        width: '70%',
        maxWidth: 300,
        height: 200,
        margin: 15,
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
    link:{
        color: '#FDB075',
        margin: 10,
    },
});

export default SignUpScreen;