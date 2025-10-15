import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Afegeix una nova tasca..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Afegir</button>
    </form>
  );
}

export default TaskForm;