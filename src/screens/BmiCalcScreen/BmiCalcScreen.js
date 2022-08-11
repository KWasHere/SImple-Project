import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BmiCalcScreen = () =>{
    return(
        <View>
            <Text style={styles.container}>Trial</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

      backgroundColor: '#F9FBFC',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  });

export default BmiCalcScreen;