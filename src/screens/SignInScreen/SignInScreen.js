import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ComdeltaLogo from '../../../assets/ComdeltaLogo.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const SignInScreen = () => {

        const [username, setUsername] =useState('');
        const [password, setPassword] =useState('');

        const [passwordVisibility, setPasswordVisibility] = useState(true);
        const [rightIcon, setRightIcon] = useState('eye');

        const handlePasswordVisibility = () => {
            if (rightIcon === 'eye') {
              setRightIcon('eye-off');
              setPasswordVisibility(!passwordVisibility);
            } else if (rightIcon === 'eye-off') {
              setRightIcon('eye');
              setPasswordVisibility(!passwordVisibility);
            }
          };

        const {height} = useWindowDimensions();
        const navigations = useNavigation();

        const onSignInPressed = () =>{
             //validate user using backend dev

             navigations.navigate('HomeScreen');
                };

        const onForgotPasswordPressed = () =>{
            //validate user using backend dev

            navigations.navigate('ForgotPasswordScreen');
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
                          //validate user using backend dev
            navigations.navigate('SignUpScreen');
        };

    return (
        <ScrollView>
        <View style ={styles.root}>
            <Image source={ComdeltaLogo} 
            style ={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"/>
                <Text style ={styles.text} >Username: </Text>
                <CustomInput 
                    placeholder="Enter Username" 
                    value ={username} 
                     setValue={setUsername} />
                <Text style ={styles.text} >Password: </Text>
                <CustomInput 
                    placeholder="Enter Password" 
                    value ={password} 
                    setValue={setPassword}
                    secureTextEntry 
                    onChangeText={(password) => setPassword(password)}
                /><Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22}color="#232323" />
                 </Pressable>
              

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
    text:{
        fontWeight: 'bold',
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        height: 200,
        margin: 15,
    },
});

export default SignInScreen