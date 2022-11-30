import React, { useState } from "react";
import Task from "../Task";
import "./styles.css";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const actualizarTarea = (elId) => {
    //console.log("actualizarrrr", elId);
    //hacer una copia del arr
    const cpTasks = [...tasks];
    //console.log(cpTasks);
    //modificar el arr
    const newTasks = cpTasks.map((tarea) => {
     // console.log("la tarreaa", tarea);
      if(tarea._id === elId){
        tarea.isDone = !tarea.isDone
      }
      return tarea
    });
    setTasks(newTasks)
  };
 const tareasCompletadas = ()=>{
    console.log("tarrreaass complet" )
    //filter recorre el ar y regresa uno nuevo 
    const completadas = tasks.filter((tarea)=> tarea.isDone);
    console.log(completadas )
    return completadas.length
 }
  return (
    <div>
      <p>
        ToDoList <strong>{tareasCompletadas()}/{tasks.length}</strong>
      </p>
      <div className="renglon">
        {initialTasks.map((task) => {
          return (
            <Task
              key={task._id}
              tarea={task}
              actualizarTarea={actualizarTarea}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
