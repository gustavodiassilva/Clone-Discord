import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface props{
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<props> = ({
  channelName,
  selected
}) =>{
  return(
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div className='box'>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>

  )
};

export default ChannelButton;