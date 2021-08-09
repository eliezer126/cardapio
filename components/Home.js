import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground} from 'react-native';


export default function Home(props){
  return(
    <View style = {estilo.container}> 
    <ImageBackground style = {estilo.imgfundo} source={require("../assets/cardapio.jpg")}>
    <Text style = {estilo.titulo}> Cardapio </Text>


<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Pratos')}}>
<Text style={estilo.textobtn}> Pratos </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Doces')}}>
<Text style={estilo.textobtn}> Doces </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Bebidas')}}>
<Text style={estilo.textobtn}> Bebidas </Text>
</TouchableOpacity>
</ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 imgfundo:{
   width: 333,
   height: 533,
    
  },
  titulo:{
    marginTop: 70,
    alignSelf: 'center',
    fontSize: 25,
    color: '#FFFFFF'
  },
  btn:{
    width: 120,
    marginLeft: 100,
    margin:10,
    padding:10,
    backgroundColor:'#FF0000',
    borderRadius: 5,
    textAlign: 'center',
  },
  textobtn:{
    fontSize: 25
  }
})