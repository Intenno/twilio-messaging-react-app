import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { messageInputChange, send } from '../actions';
import { connect } from 'react-redux';

class Message extends Component {

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
            style={{ height:35, width: 300, borderColor:'gray', borderWidth:1}}
            id="to"
            value = {this.props.to}
            onChangeText={text => this.props.messageInputChange({'field': 'to', 'value': text})}
            />
          </View>
          <View>
            <TextInput
              style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
              placeholder="Type message here"
              multiline
              numberOfLines={4}
              id="body"
              value = {this.props.body}
              onChangeText={text => this.props.messageInputChange({'field': 'body', 'value': text})}
            />
          </View>
          {this.showButton()}
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    to: state.message.to,
    body: state.message.body
  }
}

export default connect(mapStateToProps, {messageInputChange})(Message);

