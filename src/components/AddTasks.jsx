import { FaPlus } from 'react-icons/fa'
import styled from 'styled-components';

function AddTasks( { newTask,setNewTask,handleSubmit }) {
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
        <input
        autoFocus 
        id='adItem'
        type='text'
        placeholder='add a new task'
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        /> 
        <button 
        type='submit'
        aria-label='Add Task'
        >
           <FaPlus /> 
        </button>
    </Form>
  )
}

export default AddTasks;

const Form = styled.form`   
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    input {
        padding: 10px 12px;
        width: 440px;
        border: none;
        border-radius: 16px;
        outline: none;
        box-shadow: 2px 0 5px -2px rgb(0 0 0/25%);

        @media (max-width: 800px){
        width: 330px;
        max-width: 100%;
        text-align: center;
    }
    }
    button {
        cursor: pointer;
        background: #fff ;
        border: none;
        padding: 10px 12px;
        margin-left: 10px;
        border-radius: 50%;
        box-shadow: 2px 0 5px -2px rgb(0 0 0/25%);
    }
`