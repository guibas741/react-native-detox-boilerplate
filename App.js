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
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.formContainerStyle}>
          <Text>Email</Text>
          <View style={styles.inputStyle}>
            <TextInput
              testID="email-input"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text>Senha</Text>
          <View style={styles.inputStyle}>
            <TextInput
              secureTextEntry
              testID="password-input"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {!!error && <Text style={styles.errorStyle}>{error}</Text>}

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleValidation}>
            <Text style={styles.buttonTextStyle}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  formContainerStyle: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    margin: 20,
  },
  inputStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  errorStyle: {
    color: 'red',
  },
  buttonStyle: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
  },
});

export default App;
