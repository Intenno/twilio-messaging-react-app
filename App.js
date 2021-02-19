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
import Settings from './src/components/settings';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { create } from 'react-test-renderer';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <MessageList />
    </View>
  );
}

function ShowProfile({navigation}) {
  return (
    <View>
      <Profile/>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
}

function ShowSettings({navigation}) {
  return (
    <View>
      <Settings/>
    </View>
  )
}

const ProfileStack = createStackNavigator();

const MessageStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Messages') {
              iconName = 'chatbox-ellipses-outline';
            } else if (route.name === 'Account') {
              iconName = 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >
          <Tab.Screen name="Messages">
            {() => (
              <MessageStack.Navigator>
                <MessageStack.Screen 
                name="Messages" 
                component={ShowMessageList} 
                options = {({navigation}) => ({
                  headerRight: () => (
                    <Icon
                    type='ionicon'
                    name='create-outline'
                    onPress={() => navigation.navigate("New Message")}
                    />
                  )
                })}
                />
                <MessageStack.Screen name="New Message" component={ShowNewMessage} />
              </MessageStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Account">
            {() => (
              <ProfileStack.Navigator>
                <ProfileStack.Screen 
                name="Account" 
                component={ShowProfile} 
                options = {({navigation}) => ({
                  headerRight: () => (
                    <Icon
                    type='ionicon'
                    name='settings-outline'
                    onPress={() => navigation.navigate("Settings")}
                    />
                  )
                })}
                />
                <ProfileStack.Screen name="Settings" component={ShowSettings} />
              </ProfileStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer> 
    </Provider>
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


