import React from "react";
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';


const HomeScreen = () =>{

    const navigations = useNavigation();
    
    const onSignInPressed = () =>{
        navigations.navigate('SignInScreen');
                       };

    const onMathPressed = () =>{
         navigations.navigate('BmiCalcScreen');
                        };
    return(
        <View>
            <Text style ={{
                fontSize: 24,
                padding: 20,
                marginBottom: 250,
                alignSelf: 'center',}}>This is the home page.</Text>
            
            <CustomButton
                        text= "BMI Calculator"
                        onPress={onMathPressed} 
                        />
            <CustomButton
                        text= "Distance Conversion"
                        onPress={onMathPressed} 
                        />
            <CustomButton
                        text= "idk man"
                        onPress={onMathPressed} 
                        />

            <CustomButton 
                        text= "Back to sign in Page"
                        onPress={onSignInPressed} 
                        type ="TERTIARY" />
        </View>
    );
};

export default HomeScreen;