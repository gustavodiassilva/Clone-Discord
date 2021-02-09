import React from 'react';

import { Button, Home } from './styles';


export interface props{
  selected ?: boolean;
  isHome ?: boolean;
  hasNotifications ?: boolean;
  mentions ?: number;
}

const ServerButton: React.FC<props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {

  return(
    <Button   
    isHome={isHome}
    hasNotifications={hasNotifications} 
    mentions={mentions} 
    className={selected ? 'active' : ''}
    >
      {isHome && <Home />}
    </Button>
  )
  
}

export default ServerButton;