import React from 'react';


export const Edit = ({text,item,setText,isEdit,setIsEdit,tasks,setTasks, handleDelete}) => {


  const toggle = (ID)=>{
    if(isEdit){
      handleEdit(item.ID,text);
      setIsEdit(!isEdit)
      patchFetch(ID)
    }else{
      setIsEdit(!isEdit)
  }}
  const handleEdit=(ID,text)=>{
    console.log("handleEdit",ID,text)
  const arr =  tasks.map(item=>item.ID===ID?{...item,title:text}:item);
  patchFetch(ID)
   setTasks([...arr])
   patchFetch(ID)
  
  
  }
  async function patchFetch(ID){
    try{
      const response = await fetch(`https://first-node-js-app-r.herokuapp.com/api/todos/${ID}`,
      {
        method:'PATCH',
        headers:{
          'Content-type':'application/json',
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
       title:text
        })
      });
      const result =await response.json();
       console.log(result)
    }catch(err){console.log(err.message)}}
   
  return (
    <div className='item-block'>

    <div className='flex-item' >{isEdit ?<input onChange={(e)=>setText(e.target.value)} value = {text}/> :<div>{`${item.title}`}</div> } </div>
    <div className='flex-button'>
        <button onClick={() =>  handleDelete(item.ID)}>delete</button>
        <button onClick={() => toggle()}>{isEdit ? "save":"edit"}</button>
      </div>
   
    </div>

  )
}
