import React, { useState } from 'react';

const TodoListHook = () => {

  const [items, setItems] = useState(['Tomate','Alface','Melancia']);
  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = () => {
    setItems([...items.slice(1)])
  }

  const renderItens = (item, index) => {
    return (
      <div key={`item-${index}`}>
        <li>{item}</li>
      </div>
    )
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista</p>
      <ul className="lista-estilizada">
        {items.map(renderItens)}
      </ul>
      <button onClick={() => addItem('Abóbora')}>Add Item</button>
      <button onClick={() => removeItem()}>Remove Item</button>
    </div>
  );
}

export default TodoListHook;
