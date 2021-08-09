import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Pratos(){
  return(

<View style={estilo.container}>


<ScrollView>
<Text style={estilo.nome}> Prato 01</Text>

<Image style={estilo.img} source={require('../assets/prato1.jpg')}/>
<Text style={estilo.nome}>R$ 25,00 un.</Text>
<Separador/>

<Text  style={estilo.nome}> Prato 02 </Text>

<Image style={estilo.img} source={require('../assets/prato2.jpg')}/>
<Text style={estilo.nome}>R$ 35,00 un.</Text>
<Separador/>

</ScrollView>
</View>

  );
}
const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#FF0000',
    padding:10,
  },
  separador:{
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000000'
  },
  nome:{
    color: '#FFFFFF',
    marginBottom:10,
    fontSize: 15
  },
  img:{
    width: 250,
    height: 250,
  }
});