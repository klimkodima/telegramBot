import React from 'react';
import Button from '../Button';
import  { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = () => {
   const { user, onClose } = useTelegram();

 return(
    <div className={'header'}>
      <Button onClick={onClose}>Close</Button>
      <span className='user-name'>{user}</span>
    </div>
 )
}

export default Header;