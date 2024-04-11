import React from 'react'

function Task( {element} ) {
    return (
        <ul> 
            <li>{element} <button>Eliminar</button></li> 
        </ul>
    );
}

export default Task
