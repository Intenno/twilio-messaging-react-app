import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Message extends Component {

  

  render() {
    return (
        <View>
            <GiftedChat/>
        </View>
    );
  }
}
