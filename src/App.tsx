import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { Priority, Todo } from '../src/interfaces/Form'
//subcomponentes 
import ListTodo from './components/ListTodo'
import FormTodo from './components/FormTodo'




const App = () => {

  //estado para el formulario


  const[listaTodo , setListaTodo] = 
                useState<Todo[]>([])


  //crear funcion para añadir
    // nueva tarea a listaTodo 
    // pero aislada
    //nECESITA LOS ATRIBUTOS DE LA NUEVA
    //tarea como parametros
const addToDo = ( titulo: string , 
                  prioridad:Priority) => {
     //nueva tarea
    const Tarea: Todo = {
        id: crypto.randomUUID(),
        titulo: titulo,
        prioridad: prioridad, 
        completada: false
      }
    //poner la nueva tarea 
    // en la lista
    setListaTodo((prev)=>[...prev , Tarea])
  }
  //function para tratar el form



  

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

export default App

function setFormulario(arg0: any) {
  throw new Error('Function not implemented.')
}
