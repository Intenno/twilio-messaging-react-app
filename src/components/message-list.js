import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    /* axios.get('http://localhost:3000/list')
      .then(response =>  {
        console.log(response.status);
        list = response.list;
      }); */

    return (
      <View>
        {
            list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar rounded source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))
        }
      </View>
    );
  }
}


const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://www.jing.fm/clipimg/full/57-579629_avatar-clipart.png',
      subtitle: 'Hey! Just checking in.'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU',
      subtitle: 'Sounds Good'
    },
    {
      name: 'Robert Page',
      avatar_url: 'https://pbs.twimg.com/profile_images/56988109/rsp_austria.jpg',
      subtitle: "Let's chat about Intenno"
    },
    {
      name: 'Cece Page',
      avatar_url: 'https://s.clipartkey.com/mpngs/s/11-115809_cat-walking-clipart-black-and-white.png',
      subtitle: "Meow meow"
    }
  ]
