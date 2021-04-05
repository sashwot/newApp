import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech'

export default function App() {
  return (
    <View style={{
      backgroundColor:"#4B0082",
      flex:0.3,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    }}>

    
    <TouchableWithoutFeedback onPress={()=>Speech.speak('I want to go to washroom!') } >
      
      <View
          style={{
            backgroundColor:'red',
            width:90,
            height:120,
            top: 165,
            left:130,
          }}
          
      />

      
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>Speech.speak('I am hungry!')}>
      <View 
          style={{
            backgroundColor:'blue',
            width:90,
            height:120,
            top: 165,
            right:-170,
          }}
      />
    </TouchableWithoutFeedback> 
    <TouchableWithoutFeedback onPress={()=>Speech.speak('I need your help!')}>
      <View 
          style={{
            backgroundColor:'black',
            width:90,
            height:120,
            top: 165,
            left:230,
          }}
      />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>Speech.speak('I need a power nap!')}>
      <View 
          style={{
            backgroundColor:'purple',
            width:90,
            height:120,
            top: 300,
            right:140,
          }}
      />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=> Speech.speak('I want to talk with my family member!')}>
      <View 
        style={{
          backgroundColor:'#dc143c',
          width:90,
          height:120,
          top:300,
          right: 100,
        }}
      />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=> Speech.speak('I want to talk with you!')}>
      <View 
        style={{
          backgroundColor:'yellow',
          width:90,
          height:120,
          top:300,
          right: 40,
        }}
      />
    </TouchableWithoutFeedback> 
    <TouchableWithoutFeedback onPress={()=>Speech.speak('Please leave me alone!')}>
      <View 
        style={{
          backgroundColor:'orange',
          width:90,
          height:120,
          top:450,
          right:130,
        }}
      />
    </TouchableWithoutFeedback> 
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



