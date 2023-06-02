import * as React from 'react';
import { Text, View, StyleSheet, Image,  } from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/BET.png')} />
      <Text style={styles.Titulo}>
      Moca bet
      </Text>
      <Text style={styles.paragraph}>
       Site de aposta mais Mais verdadeiro da atualidade,ganhe um bonus de ate 1000 reais, tem os jogos mais legais pra apostar
       </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'black',
    
  
  },
  
  logo: {
    height: 115,
    width: 300,
    marginBottom:200
    
  
  },
   paragraph: {
    margin: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
   },
    

  Titulo: {
    fontSize: 30,
    marginBottom: 30 ,
    color: 'white',
  }
});
