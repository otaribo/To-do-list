import React from 'react';
import TaskDueDate from './TaskDueDate';

function TaskItem({ task, onToggle, onDelete, onUpdateDate }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span className="text" onClick={() => onToggle(task.id)}>
        {task.text}
      </span>
      <TaskDueDate
        taskId={task.id}
        dueDate={task.dueDate}
        onUpdateTaskDate={onUpdateDate}
      />
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;