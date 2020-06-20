import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    editItem ? setTitle(editItem.title) :setTitle('')
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleInputChange}
        className="task-input"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
    </form>
  )
}

export default TaskForm
