import { useState, useEffect } from "react";

const useArray = () => {
  const [newItem, setNewItem] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [removeItem, setRemoveItem] = useState(null);

  useEffect(() => {
    if (newItem) {
      setTodoList((prev) => [ ...prev, newItem ])
    }
  }, [newItem]);

  useEffect(() => {
    if (removeItem !== null) {
      setTodoList((prev) => prev.filter((_e, index) => index !== removeItem));
      setRemoveItem(null);
    }
  }, [removeItem]);

  return [todoList, setNewItem, setRemoveItem];
}

export default useArray;
