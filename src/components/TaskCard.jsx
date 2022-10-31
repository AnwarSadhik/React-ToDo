import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

function TaskCard({ tasks,handleCheck,handleDelete }) {
  return (
    <Container>
    <ul>
      {tasks.map((task) => (
        <li className="item" key={task.id}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheck(task.id)}
          />
          <label
          style={task.checked ? {textDecoration: 'line-through'} : task}
          >
            {task.task}
          </label>
          <FaTrash
            role="button"
            tabIndex="0"
            className="icon"
            onClick={() => handleDelete(task.id)}
            aria-label={`Delete ${tasks.tasks}`}
          />
        </li>
      ))}
    </ul>
  </Container>
  )
}

export default TaskCard

const Container = styled.div`
     ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 22px 40px;
    background: white;
    box-shadow: 2px 0 5px -2px rgb(0 0 0/25%);
    margin: 1rem;
    width: 550px;
    border-radius: 6px;

    @media (max-width:800px) {
        max-width: 400px;
        max-width: 100%;
    }

  }
  label {
    width: 100%;
    padding: 0 30px;
    font-size: 1.3rem;
    cursor: pointer;

    @media (max-width:800px) {
        font-size: 1rem;
        max-width: 100%;
        white-space: pre-line;
    }

  }
  input[type="checkbox"] {
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
  .icon {
    float: right;
    cursor: pointer;
  }
  .icon:hover {
    color: red;
    transform: translateY(-4px);
    transition: 0.1s ease-in;
    border: none;
    outline: none;
  }
`