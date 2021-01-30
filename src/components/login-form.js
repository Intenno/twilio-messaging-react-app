import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button, Input } from 'react-native-elements';
import firebase from 'firebase';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDu9lfJLzPIZFg2ANnAi2YKWEIaruwds1M",
      authDomain: "twilio-messaging-a52b1.firebaseapp.com",
      projectId: "twilio-messaging-a52b1",
      storageBucket: "twilio-messaging-a52b1.appspot.com",
      messagingSenderId: "79566085218",
      appId: "1:79566085218:web:fe341eb39a1856da98453b"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  login() {
    const { email, password } = this.props;
    this.props.login({email, password});
  }

  showButton() {
    /* if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator size ={'small'}/>
        </View>
      );
    } */
    return (
    <Button title = "Login" onPress={this.login.bind(this)}/>
    );
  }

  render() {
    return (
      <View style = {styles.container}>
        <Input 
        placeholder = "Email" 
        value = {this.props.email}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
        />
        <Input 
        placeholder = "Password" 
        value = {this.props.password}
        secureTextEntry={true} 
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
        onChangeText={text => this.props.authInputChange({'field': 'password', 'value': text})}
        />
        {this.showButton()}
      </View>
    );
  }
}


// Getting input from redux state
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.user,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm);

const styles = {
    container: {
        marginTop: 50
    }
}
