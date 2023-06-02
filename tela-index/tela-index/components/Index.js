import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function AssetExample() {
  return (
    <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/BET.png')} />
      <Text style={styles.Titulo}>
      Moca bet!!! 
      </Text>
      <Text style={styles.paragraph}>
        Faça mais dinheiro por aqui, não de dinheiro parar de dar dinheiro para influencers as chances aqui sao 50/50
       </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'black'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 20,
    
  },
  Titulo: {
    fontSize: 30,
    marginBottom: 30 ,
    color: 'white'
  }
});
