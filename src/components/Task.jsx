
import React from "react";
import { Edit } from "./Edit";

export const Task = ({ item, tasks, setTasks}) => {
 
  const [text,setText] = React.useState(item.title);
  const [isEdit, setIsEdit] = React.useState(false);
  async function deleteFetch(ID) {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_MY_KEY}/${ID}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
    return data.ID
      
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleDelete = async(ID) => {
 const id  = await deleteFetch(ID);
  const newArr = tasks.filter((item) => item.ID !== id);
    setTasks([...newArr]);
 
  };

  return (
    <div className="item" key={item.ID}>
      
      <Edit item = {item} text = {text} setText = {setText} isEdit = {isEdit} setIsEdit = {setIsEdit}  tasks = {tasks} handleDelete ={handleDelete} setTasks ={setTasks}/>
      
    </div>
  );
};