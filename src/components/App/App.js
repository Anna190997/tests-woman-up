import React from 'react';
import Title from '../Title/Title';
import List from '../List/List';
import Form from '../Form/Form';
import './App.scss';
import { useState } from 'react';
import LIST from '../../constants';

const App = () => {
  const [valueTitle, setValueTitle] = useState('');
  const [valueText, setValueText] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [list, setList] = useState(LIST);

  const handleChangeTitle = (valueTitle) => {
    setValueTitle(valueTitle);
  };

  const handleChangeText = (valueText) => {
    setValueText(valueText);
  };

  const handleChangeDate = (valueDate) => {
    setValueDate(valueDate);
  };

  const addHandler = (event) => {
    event.preventDefault();
    setList((list) => {
      return [
        {
          id: Math.random().toString(36).substring(7),
          text: valueText,
          title: valueTitle,
          checked: false,
          date: valueDate,
        },
        ...list,
      ];
    });
    setValueTitle('');
    setValueText('');
    setValueDate('');
  };

  const deleteHandler = (id) => {
    setList((list) => {
      return list.filter((listOfItems) => listOfItems.id !== id);
    });
  };

  const changeChecked = (id) => {
    const copyList = [...list];
    const findChecked = copyList.find((item) => item.id === id);
    findChecked.checked = !findChecked.checked;
    setList(copyList);
  };
  return (
    <>
      <Title title="Список дел" />
      <Form
        onChangeTitle={handleChangeTitle}
        onChangeText={handleChangeText}
        valueText={valueText}
        valueTitle={valueTitle}
        onClick={addHandler}
        onChangeDate={handleChangeDate}
        valueDate={valueDate}
      />
      <List
        list={list}
        deleteHandler={deleteHandler}
        setList={setList}
        changeChecked={changeChecked}
      />
    </>
  );
};

export default App;
