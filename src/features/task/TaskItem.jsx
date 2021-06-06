import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from './taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch(task);
  return (
    <>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
    </>
  );
};

export default TaskItem;
