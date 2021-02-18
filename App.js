import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import LoginForm from './src/components/login-form';
import Header from './src/components/header';
import MessageList from './src/components/message-list';
import Message from './src/components/message';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Profile from './src/components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

/* export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View>
        <Header title = "Message"/>
        <LoginForm />
      </View>
    </Provider>
  );
} */

function ShowMessages({navigation}) {
  return (
    <View>
      <Header title = "Messages" />
      <MessageList />
    </View>
  );
}

function ShowProfile({navigation}) {
  return (
    <View>
      <Header title = "Profile" />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => navigation.navigate('Messages')}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={ShowMessages} />
        <Tab.Screen name="Profile" component={ShowProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


