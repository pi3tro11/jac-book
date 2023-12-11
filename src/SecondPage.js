import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { orange } from '@mui/material/colors';

const SecondPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 10); // Increment the progress bar by 10 units every second
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Logo-JAC.webp')}
        style={styles.logo}
      />
      <Text style={styles.textOrange}>
        Ehi, conosci l’articolo 2 dello statuto? Il suo scopo?
      </Text>
      <Text style={styles.text}>
        promuovere la realizzazione integrale della persona, accompagnandone e
        sostenendone, attraverso l’acquisizione piena dei criteri per l’azione
        personale, la naturale propensione al compimento di sé, il cui vertice è
        la libertà intesa come piena soddisfazione dei propri desideri.
      </Text>
      <View style={styles.line} />

      <View style={styles.progressBar}>
        <View style={{ width: `${progress}%`, backgroundColor: 'blue', height: 20, borderRadius: 5 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: 'grey',
    marginBottom: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  textOrange: {
    fontSize: 20,
    fontWeight: 'bold',
    color: orange[500],
    marginTop: '20%',    
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    borderColor: orange[500],
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '20%',
  },
  line: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10, 
  },
  progressBar: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default SecondPage;
