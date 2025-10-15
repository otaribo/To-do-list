import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

function TaskDueDate({ taskId, dueDate, onUpdateTaskDate }) {
  const date = dueDate ? new Date(dueDate) : null;

  const handleChange = (newDate) => {
    onUpdateTaskDate(taskId, newDate);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Data límit"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" />}
        />
      </LocalizationProvider>
      {dueDate && (
        <span className="small-muted">Límit: {format(date, 'dd/MM/yyyy')}</span>
      )}
    </div>
  );
}

export default TaskDueDate;