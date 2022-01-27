import React, {useState, useEffect} from 'react';
import ShoppingForm from './ShoppingForm';
import ShoppingItems from './ShoppingItems';
import './shoppingStyle.css';
import {nanoid} from 'nanoid';


const ShoppingList = () => {
  const [datas, setDatas] = useState(() => {
    // get local stored data
    const saved = localStorage.getItem("todoos");
    const savedDatas = JSON.parse(saved);
    return savedDatas || "";
  });


  const handleNewInput = (newText) => {
    const newList = {
      id: nanoid(),
      text: newText,
      isCompleted: false,
    }

    const newLists = [...datas, newList];
    setDatas(newLists);
  }

  const handleDelete = (clickedId) => {
   const newDatas = datas.filter(data => data.id !== clickedId);
  setDatas(newDatas);
  }

  const handleToggle = (index) => {
    const newDatas = [...datas];
    newDatas[index].isCompleted = !newDatas[index].isCompleted
    setDatas(newDatas);
  }

  // completed items count
  const countChecks = datas.filter(data => data.isCompleted === true)


  // save to local storage
  useEffect(() => {
    const json = JSON.stringify(datas);
    localStorage.setItem("todoos", json);
  }, [datas]);

  return (
      <div className='shopping'>
        <div className='shopping__container'>
          <ShoppingForm onHandleNewInput={handleNewInput}/>
          <div className='shopping__line'></div>
            <h4 className='shopping__line__title'>Shopping List</h4>
            {datas.map((data, index) => (
              <ShoppingItems key={data.id} data={data} onHandleDelete={handleDelete} index={index}
              onHandleToggle={handleToggle}
              />
            ))}
            <h5 className='shopping__line__total'>Completed items: <span className='shopping__line__total__number'>{countChecks.length}</span></h5>
        </div>
      </div>
  )};

export default ShoppingList;
