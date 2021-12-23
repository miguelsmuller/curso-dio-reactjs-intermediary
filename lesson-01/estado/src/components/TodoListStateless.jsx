import React from 'react';

const TodoListStateless = ({items}) => {

  const renderItens = (item, index) => {
    return (
      <div key={`item-${index}`}>
        <li>{item}</li>
      </div>
    )
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista Stateless</p>
      <ul className="lista-estilizada">
      {items.map(renderItens)}
      </ul>
    </div>
  )
}

export default TodoListStateless;
