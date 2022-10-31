import { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {

   const { country, setCountry } = useState('');
   const { street, setStreet } = useState('');
   const { subject, setSubject } = useState('physical');

   const { tg } = useTelegram();

   useEffect(() => {
      tg.MainButton.setParams({
         text: 'Send data'
      })
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   useEffect(() => {
      if(!country || !street) {
         tg.MainButton.hide();
      } else {
         tg.MainButton.show();
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[country, street]);

   const onChangeCountry = (e) => {
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