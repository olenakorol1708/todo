import React from 'react'

export const Input = ({item, addItem, handleChange}) => {


  return (
    <form onSubmit={addItem}>
        <input
          name="input-task"
          onChange={handleChange}
          value={item}
          placeholder="Enter task.."
        />
        <button type="submit">Add task</button>
      </form>
  )
}
