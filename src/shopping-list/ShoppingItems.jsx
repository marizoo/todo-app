import React from 'react';
import './shoppingStyle.css'
import {FiTrash2} from 'react-icons/fi'
import {RiCheckboxBlankCircleLine, RiCheckboxCircleLine} from 'react-icons/ri'

const ShoppingItems = ({data, index, onHandleDelete, onHandleToggle}) => {
  return (
    <ul className='shoppingItems__ul'>
      <li className='shoppingItems__li'>
          <div className='shoppingItems__li__box'>
              {data.isCompleted && <span className='shoppingItems__li__box__checkbox color'><RiCheckboxCircleLine onClick={() => onHandleToggle(index)}/></span>}
              {!data.isCompleted && <span className='shoppingItems__li__box__checkbox'><RiCheckboxBlankCircleLine onClick={() => onHandleToggle(index)}/></span>}

              {data.isCompleted && <span className='shoppingItems__li__box__text strike'>
                  {data.text}
                </span>}

                {!data.isCompleted && <span className='shoppingItems__li__box__text'>
                  {data.text}
                </span>}
                
                <div className='shoppingItems__li__box__button'>
                  <FiTrash2 onClick={() => onHandleDelete(data.id)}/>
                </div>
          </div>
      </li>
    </ul>
  )};


export default ShoppingItems;
