import React, { useState } from "react";
import { useEffect } from "react";
import { Task } from "../components/Task";

export const Todopage = () => {
  const [tasks, setTasks] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    fetch(
      "https://first-node-js-app-r.herokuapp.com/api/todos?isCompleted=false",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTasks(data)); //console.log(data)
  }, []);

  const handleChange = (e) => {
    setItem(e.target.value);
    console.log(item);
    console.log(tasks);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (item.trim() !== "") {
      const newTask = { title: item };
      addToDoFetch(newTask);
      setItem("");
      console.log(tasks);
    } else {
      alert("Please enter a task.");
    }
  };

  async function addToDoFetch(newTask) {
    try {
      const result = await fetch(
        "https://first-node-js-app-r.herokuapp.com/api/todos",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(newTask),
        }
      );
      const data = await result.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="todo-body">
     
      <h1> MY TODOLIST:</h1>
      <form onSubmit={addItem}>
        <input
          className="addtask-input"
          name="input-task"
          onChange={handleChange}
          value={item}
          placeholder="Enter task.."
        />
        <button type="submit" className="add-button">
          Add task
        </button>
      </form>
      {tasks &&
        tasks.map((item) => (
          <Task key={item.ID} item={item} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};
