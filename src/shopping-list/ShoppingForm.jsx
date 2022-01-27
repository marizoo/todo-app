import React, { useState } from 'react';
import './shoppingStyle.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const ShoppingForm = ({onHandleNewInput}) => {
    const [input, setInput] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const newText = input;

        onHandleNewInput(newText);
        console.log(newText);
        setInput('');
    }

    const btnStyle = {
        fontSize: '20px',
    }
  return (
      <div className='shoppingForm'>
          <form className='shoppingForm__form' onSubmit={handleSubmit}>
            <input onChange={(ev) => setInput(ev.target.value)} value={input} className='shoppingForm__form__input' type="text" placeholder='Add to list...'/>
            <div className='shoppingForm__form__button'><AiOutlinePlusCircle type="submit" style={btnStyle}/></div>
          </form>
      </div>
  )};

export default ShoppingForm;
