import React, { useState } from 'react';
import ListItems from '../ListItems/ListItems';

const List = ({ list, deleteHandler, setList, changeChecked }) => {
  const [updateItem, setUpdateItem] = useState(null);
  return (
    <div>
      {list.map((item) => (
        <ListItems
          item={item}
          key={item.id}
          setList={setList}
          updatedItem={updateItem}
          setUpdateItem={setUpdateItem}
          deleteHandler={deleteHandler}
          id={item.id}
          checked={item.checked}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  );
};

export default List;
