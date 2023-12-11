import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SecondPage from './SecondPage';

const LogoPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowSecondPage(true);
    }, 9000); // 9000 millisecondi = 9 secondi

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {showLogo && (
        <Image
          source={require('../assets/img/Logo-JAC.webp')}
          style={styles.logo}
        />
      )}
      {showSecondPage && <SecondPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default LogoPage;
