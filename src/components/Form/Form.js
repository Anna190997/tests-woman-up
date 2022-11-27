import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

const Form = ({
  onChangeTitle,
  onChangeText,
  onChangeDate,
  onClick,
  valueTitle,
  valueText,
  valueDate,
}) => {
  const handleChangeTitle = (event) => {
    onChangeTitle(event.target.value);
  };

  const handleChangeText = (event) => {
    onChangeText(event.target.value);
  };

  const handleChangeDate = (event) => {
    onChangeDate(event.target.value);
  };

  return (
    <form className="form_wrapper" onSubmit={onClick}>
      <input
        className="input_add_task"
        onChange={handleChangeTitle}
        required={true}
        value={valueTitle}
        placeholder="Название задачи..."
      />
      <input
        className="input_add_task"
        onChange={handleChangeText}
        value={valueText}
        required={true}
        placeholder="Описание задачи..."
      />
      <input
        className="input_add_task"
        type="date"
        onChange={handleChangeDate}
        value={valueDate}
        required={true}
      />
      <Button textButton="Добавить задачу" />
    </form>
  );
};

export default Form;
