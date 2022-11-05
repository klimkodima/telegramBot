import { useState, useEffect, useCallback } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {

   const [ country, setCountry ] = useState('');
   const [ street, setStreet ] = useState('');
   const [ subject, setSubject ] = useState('physical');

   const { tg, user } = useTelegram();

   const onSendData = useCallback(() => {
      const data = {
         country,
         street,
         subject
      }
      tg.sendData(JSON.stringify(data));
   }, [country, street, subject, tg])

   useEffect(() => {
      tg.onEvent('mainButtonClicked', onSendData)
      return () => {
         tg.offEvent('mainButtonClicked', onSendData)
      }
   }, [onSendData, tg]);

   useEffect(() => {
      tg.MainButton.setParams({
         text: 'Send data'
      })
   }, [tg]);

   useEffect(() => {
      if (!country || !street) {
         tg.MainButton.hide();
      } else {
         tg.MainButton.show();
      }
   }, [country, street, tg]);

   const onChangeCountry = (e) => {
      console.log(e.target.value)
      setCountry(e.target.value);
   }

   const onChangeStreet = (e) => {
      setStreet(e.target.value);
   }
   const onChangeSubject = (e) => {
      setSubject(e.target.value);
   }


   return (
      <form className='form'>
         <h2>Enter your data</h2>
         <h2>{user.username}</h2>
         <input type="text" name="country" value={country}
            onChange={onChangeCountry} className="input" placeholder='Country' />
         <input type="text" name="street" value={street}
            onChange={onChangeStreet} className="input" placeholder='Street' />
         <select value={subject} name="subject" className="select" onChange={onChangeSubject}>
            <option value="physical">Physical person</option>
            <option value="legal">Legal entity</option>
         </select>
      </form>
   )
}

export default Form;