import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech'


var commands = ['I want to go to washroom!', 'I am hungry!', 'I need your help!', 'I need a power nap!', 'I want to talk with you!', 'I want to be alone!', 
'Have a great day!', 'Goodbye!'];


export default function App() {
  return (
   <View style={styles.container}>
    <View style={styles.topbar}>
    <Text style={styles.textstyle}>Text-To-Speech App</Text>
   </View>
   
    
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[0])} > 
      <View style={styles.button}>
       <Text>{commands[0]}</Text> 
      </View> 
    </TouchableWithoutFeedback>


    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[1])} >
      <View style={styles.button}>
       <Text>{commands[1]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[2])} >
      <View style={styles.button}>
       <Text>{commands[2]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[3])} >
      <View style={styles.button}>
       <Text>{commands[3]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[4])} >
      <View style={styles.button}>
       <Text>{commands[4]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[5])} >
      <View style={styles.button}>
       <Text>{commands[5]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[6])} >
      <View style={styles.button}>
       <Text>{commands[6]}</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    <TouchableWithoutFeedback onPress={()=>Speech.speak(commands[7])} >
      <View style={styles.button}>
       <Text>{commands[7]}</Text> 
      </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={()=>Speech.speak('new command')} >
      <View style={styles.button}>
       <Text>+</Text> 
      </View>
    </TouchableWithoutFeedback>
    
    

    <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
  },
  
  topbar: {
    flex: .8,
    backgroundColor:"#4B0082",
    justifyContent:'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  
  textstyle: {
    color:'#ffffff',
    fontSize: 24.0
  },
  
  buttonContainer: {
   flex: 1
  },
  
  button: {
    borderRadius: 10,
    backgroundColor:'#FFFF00',
    justifyContent:"center",
    alignItems:'center',
    margin: 5,
    flex: .5
  }
});