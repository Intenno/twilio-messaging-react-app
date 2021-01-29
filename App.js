import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/login-form';
import Header from './src/components/header';
import MessageList from './src/components/message-list';
import Message from './src/components/message';

export default function App() {
  return (
    <View>
      <Header title = "Messages"/>
      <LoginForm />
      {/* <MessageList /> */}
      {/* <Message /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
