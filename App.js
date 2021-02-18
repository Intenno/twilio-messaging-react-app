import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import LoginForm from './src/components/login-form';
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
import { Icon } from 'react-native-elements';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { create } from 'react-test-renderer';

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

function ShowNewMessage({navigation}) {
  return (
    <View>
      <Message />
    </View>
  )
}

function ShowMessageList({navigation}) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.text}> Messages </Text>
        <Icon type='ionicon' name='create-outline' onPress={() => navigation.navigate('New Message')}/>
      </View>
      <MessageList />
    </View>
  );
}

function ShowProfile({navigation}) {
  return (
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
}

const ProfileStack = createStackNavigator();

const MessageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Messages">
          {() => (
            <MessageStack.Navigator>
              <MessageStack.Screen 
              name="Messages" 
              component={ShowMessageList} 
              options = {{
                headerRight: () => (
                  <Icon
                  type='ionicon'
                  name='create-outline'
                  onPress={() => alert("Hello")}
                  />
                )
              }}
              />
              <MessageStack.Screen name="New Message" component={ShowNewMessage} />
            </MessageStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <ProfileStack.Navigator>
              <ProfileStack.Screen 
              name="Profile" 
              component={ShowProfile} 
              options={{
                headerRight: () => (
                  <Icon
                  type='ionicon'
                  name='settings-outline'
                  />
                )
              }}
              />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    /* { <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Messages" component={ShowMessageList} />
        <Tab.Screen name="Profile" component={ShowProfile} />
      </Tab.Navigator>
    </NavigationContainer> } */
  );
}

const styles = {
  headerContainer: {
    backgroundColor: '#fafbfc',
    paddingTop: 40,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    flexDirection: 'row'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  }
}


