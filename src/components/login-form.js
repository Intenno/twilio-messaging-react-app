import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Input placeholder = "Email" />
        <Input placeholder = "Password" secureTextEntry={true}/>
        <Button title = "Login" />
      </View>
    );
  }
}

const styles = {
    container: {
        marginTop: 50
    }
}
