import { useState, useEffect } from 'react'

//subcomponentes 
import ListTodo from '../../components/todos/ListTodo'
import type { Priority, Todo } from '../../interfaces/todos/Form'
import FormTodo from '../../components/todos/FormTodo'
import { consultarTodosAxios, crearTodoAxios } from '../../services/TodoService'

const TodoPage = () => {

    const[listaTodo , setListaTodo] = 
                useState<Todo[]>([])
                
     //useEffect: hook: metodo para 
        //           controlar ciclo 
        //           de vida del componente
        //           controlar lo que pase
        //           cuando se carga el conponente(App)    
        //por primera vez
    useEffect(()=>{
        const consultar = async() => {
            //llame al servicio
            //para traer datos
            const datos= await consultarTodosAxios()
            //cargar el estado
             //con los datos traidos
            setListaTodo(datos)
        }
        consultar()
    },[])

      //crear funcion para añadir
    // nueva tarea a listaTodo 
    // pero aislada
    //nECESITA LOS ATRIBUTOS DE LA NUEVA
    //tarea como parametros
    const addToDo = async ( titulo: string , 
                  prioridad:Priority) => {
    //nueva tarea
    const Tarea: Todo = {
      //UUID
        id: crypto.randomUUID(),
        titulo: titulo,
        prioridad: prioridad, 
        completada: false
    }
    
    //guardar el nuevo todo
    //en la api 
    const nuevaData = await crearTodoAxios(Tarea)

    //poner la nueva tarea 
    // en la lista
    setListaTodo((prev)=>[...prev , nuevaData])
  }


  return (
    <>
        {/* aqui se pone el subcomponente
          del formulario*/ }
        <FormTodo addToDo={addToDo}/>
        {/* AQUI SE PONE EL SUBCOMPONENTE
          ListTodo Tobla*/} 
          
        <ListTodo Todolist={listaTodo} />

    </>
  )
}

export default TodoPage