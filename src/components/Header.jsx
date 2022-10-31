import React from 'react'
import styled from 'styled-components'
import { FcTodoList } from 'react-icons/fc'

function Header() {
  return (
    <Nav>
        <h1>ToDo List <FcTodoList className='icon'/></h1>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
    text-align: center;
    background: #24252a;
    color: #fff;
    
    .icon {
      position: relative;
      top: 5px;
      font-size: 2rem;
    }
`