import React, { useState } from 'react';
import styled from 'styled-components';
import TodoListStateless from "./components/TodoListStateless";
import TodoListStatefull from "./components/TodoListStatefull";
import TodoListHook from "./components/TodoListHook";

const App = () => {
  return (
    <div>
      <TodoListStateless items={['Tomate','Alface','Melancia']}/>
      <TodoListStatefull/>
      <TodoListHook/>
    </div>
  );
};

export default App;
