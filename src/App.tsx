import { useState } from 'react'
import type { changeEvent } from 'react'
import type { TodoForm, Todo } from './interfaces/form'
import { FiAlertTriangle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const estilosFormulario: Record<string, React.CSSProperties> = {
  formulario: {
    width: '450px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '2px solid #5b9bd5',
    borderRadius: '10px',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
  },

  titulo: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2f5597'
  },

  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #999',
    borderRadius: '6px',
    fontSize: '15px'
  },

  boton: {
    width: '100%',
    padding: '9px',
    backgroundColor: '#5b9bd5',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '15px',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)'
  }
}

const App = () => {

  //estado para el formulario
  const[formulario, setFormulario] =
                  useState<TodoForm>({
                    titulo:'',
                    prioridad:'Baja'
                  })

  const[listaTodo , setListaTodo] = 
                useState<Todo[]>([])


  //function para tratar el form
  const inputChange=(event:ChangeEvent<HTMLInputElement> | 
                           ChangeEvent<HTMLSelectElement>)=>{
      
      const { name , value } = event.target

      setFormulario({
         ...formulario,
         [name] : value
      })
  }


  //funcion para tratar el submit
  const envioForm=(event:any)=>{
      
      event.preventDefault()
      
      const Tarea: Todo = {
        id: crypto.randomUUID(),
        ...formulario,
        completada: false
      }

      setListaTodo([...listaTodo , Tarea])

      setFormulario({
        titulo:'',
        prioridad:'Baja'
      })

  }


return (
    <>
       {/*El formulario para registro de nuevo todo*/}
       <section style={estilosFormulario.formulario}>
        <h2 style={estilosFormulario.titulo}>
          Registro de nueva tarea
        </h2>

         <form onSubmit={envioForm}>

              <div>
                  <label>Titulo:</label>

                  <input 
                        type="text" 
                        id="titulo"
                        placeholder="p.ej revisar github"
                        name="titulo"
                        onChange={ inputChange }
                        value={formulario.titulo}
                        style={estilosFormulario.input}
                   />
              </div>

              <div>
                  <label htmlFor=''>Prioridad:</label>

                  <select
                      id="prioridad"
                      name="prioridad"
                      onChange={inputChange}
                      value={formulario.prioridad}
                      style={estilosFormulario.input}
                    >

                      <option value="Alta">Alta</option>
                      <option value="Media">Media</option>
                      <option value="Baja">Baja</option>

                    </select>
              </div>

              <div>
                  <button 
                    type="submit"
                    style={estilosFormulario.boton}
                  >
                      crear Todo
                  </button>
              </div>

         </form>
      </section> 


      <section>

        <h1> Mis tareas</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Completada</th>
            </tr>
          </thead>

          <tbody>
            {
              listaTodo.map((todo: Todo)=>(
                <tr>

                  <td>{ todo.id }</td>

                  <td>{ todo.titulo }</td>

                  <td>{ todo.prioridad }</td>

                  <td>
                    { (todo.completada)===true ? 
                      
                      <span style={
                        { 
                          color:"rgb(70, 252, 46)" ,
                          backgroundColor:"aqua" 
                        }
                      }>
                        si <FiCheckCircle />
                      </span>
                      
                      : 
                      
                      <span style={{
                        color:"rgb(255, 0, 0)" , 
                        backgroundColor:"lightgray"
                      }}>
                        no <FiAlertTriangle />
                      </span>
                    }

                  </td>

                </tr> 
              ))
            }
          </tbody>

          <tfoot></tfoot>

        </table>

      </section>

    </>
  )
}

export default App