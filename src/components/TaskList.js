import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [res, setRes] = useState([]);
  const { tasks } = useContext(TaskListContext);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    const results = tasks.filter(task =>
      task.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setRes(results)
  }, [searchValue]);
  return (
    <div>
      {tasks.length ? (
        <div>
          <input
            type="text"
            placeholder="Search Task..."
            className="task-input search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <ul className="list">
            {!searchValue ? tasks.map(task => <Task task={task} key={task.id} />) : (res ? res.map(item => <Task task={item} key={item.id} />) : '')}
          </ul>
        </div>
      ) : (
          <div className="no-tasks">No Tasks</div>
        )}
    </div>
  );
};

export default TaskList;
