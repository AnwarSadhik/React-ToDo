import React from 'react'
import styled from 'styled-components'

function Footer({ tasks }) {
  return (
    <TaskCount>
        <p style={tasks.length ? {display:'block'} : {display:'none'}}>Tasks : {tasks.length}</p>
    </TaskCount>
  )
}

export default Footer

const TaskCount = styled.div`
    position: relative;
    bottom: 0;
    text-align: center;
    padding: 12px;
    color: red;
    width: 100vw;
    font-size: 20px;
`