import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onUpdateDate }) {
  if (tasks.length === 0) {
    return <p className="small-muted">No hi ha cap tasca.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdateDate={onUpdateDate}
        />
      ))}
    </ul>
  );
}

export default TaskList;