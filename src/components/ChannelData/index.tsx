import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () =>{
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])
  return(
    <Container>
      <Messages>
      {Array.from(Array(15).keys()).map((n) =>(
        <ChannelMessage 
        key={n}
        author="Gustavo Dias" 
        date="03/02/2021" 
        content="Qual o link do git hub? !github" 
        />
      ))}
      
      <ChannelMessage 
      author="Juke bot" 
      date="03/02/2021" 
      content={
        <>
        <Mention>@Gustavo Dias</Mention>, O link para o git hub é: <a target="_blank" href="https://github.com/gugasil">https://github.com/gugasil</a>
        </>
      }
      hasMention
      isBot
      />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>

  )
};

export default ChannelData;