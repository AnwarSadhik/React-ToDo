import React from 'react'
import styled from 'styled-components'
import TaskCard from './TaskCard';

function Tasks({ tasks,handleCheck,handleDelete }) {
  return (
    <Container>
        {tasks.length ? (
            <TaskCard 
            tasks={tasks}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        ) : <p className="no-txt">📌Empty list..</p>}
    </Container>
  )
}

export default Tasks

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  overflow-y: auto;

  .no-txt {
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }`;