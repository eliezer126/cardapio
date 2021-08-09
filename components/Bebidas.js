import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Bebidas(){
  return(

<View style={estilo.container}>
<ScrollView>
<Text style={estilo.nome}>Cervejas</Text>
<Image style={estilo.img} source={require('../assets/cerveja.jpg')}/>
<Text style={estilo.nome}>R$ 10,00 un.</Text>
<Separador/>

<Text  style={estilo.nome}> Refrigerantes </Text>

<Image style={estilo.img} source={require('../assets/refri.jpg')}/>
<Text style={estilo.nome}>R$ 5,00 un.</Text>
<Separador/>

<Text  style={estilo.nome}> Vinhos </Text>

<Image style={estilo.img} source={require('../assets/vinho.jpg')}/>
<Text style={estilo.nome}>R$ 50,00 un</Text>


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
    backgroundColor:'#00FFFF',
    padding:10,
  },
  separador:{
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000000'
  },
  nome:{
    marginBottom:10,
    fontSize: 15,
  },
  img:{
    width: 250,
    height: 250,
  }
});