/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleValidation = () => {
    if (email === '') {
      setError('Email obrigatório');
      return;
    }
    if (password === '') {
      setError('Senha obrigatória');
      return;
    }

    setError(null);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <View style={{borderRadius: 20, padding: 10, backgroundColor: 'white'}}>
          <Text>Email</Text>
          <TextInput
            testID="email-input"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Senha</Text>
          <TextInput
            secureTextEntry
            testID="password-input"
            value={password}
            onChangeText={setPassword}
          />

          {!!error && <Text style={styles.errorStyle}>{error}</Text>}

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleValidation}>
            <Text style={{color: 'white'}}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: 'green',
  },
});

export default App;
