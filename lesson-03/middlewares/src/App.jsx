import React, { useState } from 'react';
import styled from 'styled-components';
import Topico1 from './components/Topico1';
import Topico2 from './components/Topico2';

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const App = () => {
  const [topic, setTopic] = useState(1);

  return (
    <ClassRoom>
      <ClassRoomControls>
        <button onClick={() => setTopic(1)}>Tópico 1</button>
        <button onClick={() => setTopic(2)}>Tópico 2</button>
      </ClassRoomControls>
      <ClassRoomBoard>
        {topic === 1 && <Topico1 />}
        {topic === 2 && <Topico2 />}
      </ClassRoomBoard>
    </ClassRoom>
  );
};

export default App;
