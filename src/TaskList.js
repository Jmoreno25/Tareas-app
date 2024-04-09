import React, { useState } from 'react'

function TaskList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

   
    
    function guardar() {
        setTasks([...tasks, task]);
        setTask("");
    }
    
    

  return (
    <div>
        <p>Ingresa Una Tarea:</p>
        <input type="text" className="text" value={task} onChange={(e) => { setTask(e.target.value)}}/>
        <button onClick={guardar}>Guardar</button>
        <ul>
            {
                tasks.map((element, index) => {
                    return <li key={index}>{element}</li>
                })
            }
        </ul>
    </div>
  )
}

export default TaskList;
