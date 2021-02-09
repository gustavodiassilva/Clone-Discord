import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Userprops{
  nickname: string;
  isBot ?: boolean;
}
const UserRow: React.FC<Userprops> = ({ nickname,isBot }) =>{
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () =>{
  return(
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Gustavo Dias" />

      <Role>Offline - 1</Role>
      <UserRow nickname="Juke Bot" isBot/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
      <UserRow nickname="Fulano"/>
    </Container>

  )
};

export default UserList;