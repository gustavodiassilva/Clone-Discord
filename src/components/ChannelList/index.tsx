import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () =>{
  return(
    <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>
    <ChannelButton  channelName="Chat Livre"/>
    <ChannelButton  channelName="Trabalho"/>
    <ChannelButton  channelName="Lolzin"/>
    <ChannelButton  channelName="Valorant"/>

    </Container>

  )
};

export default ChannelList;