import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
//import { messageInputChange, send } from '../actions';
//import { connect } from 'react-redux';

export default class Message extends Component {

  send() {
    const { recipient, message } = this.props;
    this.props.send({recipient, message});
  }

  showButton() {
    return (
    <Button style={{marginTop: 20}} title = "Send" />
    );
  }

  render() {
    return (
        <View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 20, color: 'black'}}> To: </Text>
            <TextInput 
            //value = {this.props.recipient}
            style={{ height:35, width: 300, borderColor:'gray', borderWidth:1}}
            //onChangeText={text => this.props.messageInputChange({'field': 'recipient', 'value': text})}
            />
          </View>
          <View>
            <TextInput
              //value={this.props.message}
              style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
              //onChangeText={text => this.props.messageInputChange({'field': 'message', 'value': text})}
              placeholder="Type message here"
              multiline
              numberOfLines={4}
            />
          </View>
          {this.showButton()}
        </View>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    recipient: state.message.recipient,
    message: state.message.message,
  }
}

export default connect(mapStateToProps, {authInputChange, login})(LoginForm); */