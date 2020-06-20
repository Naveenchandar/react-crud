import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  console.log('task:', task)
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn" title="Delete Task"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn-edit task-btn" title="Edit Task" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default React.memo(Task);
