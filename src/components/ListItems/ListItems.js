import React from 'react';
import './ListItems.scss';
import Button from '../Button/Button';

const ListItems = ({
  item: { id, text, title, checked, date },
  updatedItem,
  setUpdateItem,
  setList,
  deleteHandler,
  changeChecked,
}) => {
  const isCurrentBeingUpdated = updatedItem === id;

  const handleInputChangeTitle = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, title: value } : item)),
    );
  };

  const handleInputChangeText = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, text: value } : item)),
    );
  };

  const handleInputChangeDate = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, date: value } : item)),
    );
  };

  const nowDate = Date.now();
  const taskDate = Date.parse(date);
  const compareDate = nowDate > taskDate;

  const renderTitleOrInput = () => {
    return isCurrentBeingUpdated ? (
      <>
        <input value={title} onChange={handleInputChangeTitle} />
        <input value={text} onChange={handleInputChangeText} />
        <input type="date" value={date} onChange={handleInputChangeDate} />
      </>
    ) : (
      <>
        {checked || compareDate ? (
          <>
            <div className="value_task true_check">
              <input type="checkbox" checked={checked} onChange={() => changeChecked(id)} />
              <p className="items_title">{title}</p>:<p className="items_text">{text}</p>
            </div>
            <div className="date">
              <p>Дата окончания задачи:</p>
              {date}
            </div>
          </>
        ) : (
          <>
            <div className="value_task false_check">
              <input type="checkbox" checked={checked} onChange={() => changeChecked(id)} />
              <p className="items_title">{title}</p>:<p className="items_text">{text}</p>
            </div>
            <div className="date">
              <p>Дата окончания задачи:</p>
              {date}
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="items_wrapper">
      <div className="find_of_task">{renderTitleOrInput()} </div>
      <input type="file" />
      <div className="button_wrapper">
        <Button
          textButton={isCurrentBeingUpdated ? 'Сохранить' : 'Редактировать'}
          onClick={() => setUpdateItem(isCurrentBeingUpdated ? null : id)}
        />
        <Button textButton="Удалить задачу" onClick={() => deleteHandler(id)} />
      </div>
    </div>
  );
};

export default ListItems;
