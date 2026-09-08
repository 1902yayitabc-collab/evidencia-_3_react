//Los servicios controlan operaciones
//de logica de negocio(CRUD)
//se hace una funcion po
//cada operacion (de letra de CRUD)

import axios from "axios"
import type { Todo } from "../interfaces/Form"

//1. Consultar los todos
export const consultarTodosFetch = async() => {
    //se puede utilizar una dependencia
    //para realizar operaciones asyncronas
    //fetch 
    const response = await fetch("http://localhost:3006/todos")
    //extraer datos del response
    const datos = await response.json()
    return datos
}
//1.1 consultar los todos
//  con axios 
export const consultarTodosAxios = async() => {
    //se puede utilizar una dependencia
    //para realizar operaciones asyncronas
    //axios 
    const response = await axios.get("http://localhost:3006/todos")
    //extraer datos del response
    const datos = await response.data
    return datos
}

//2. Crear un todo
export const crearTodoFetch = async(t: Todo) => {
    const response = await fetch("http://localhost:3006/todos",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(t)
    })
    const datos = await response.json()
    return datos
}

//2.2 crear un todo con axios
export const crearTodoAxios = async (t: Todo) => {
    // Axios convierte el objeto a JSON automáticamente
    // y envía los headers necesarios por defecto
    const response = await axios.post("http://localhost:3006/todos", t)
    // extraer datos del response
    const datos = await response.data
    return datos
}

//crear un objeto tarea:
/*const nuevoTodo: Todo={
    titulo: "E 200",
    prioridad: "Alta",
    completada:false,
    id:"1000"

}
crearTodoFerch( nuevoTodo)*/
    