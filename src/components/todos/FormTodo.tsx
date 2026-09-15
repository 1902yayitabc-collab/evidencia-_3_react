
import  {useState } from 'react'
import type { ChangeEvent } from 'react'
import type { Priority, TodoForm } from '../../interfaces/todos/Form'

//interface en la cual 
// definimos un prop funcion
interface FromTodoProps{
    addToDo : (titulo: string , prioridad: Priority)=>void
}

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

function FormTodo({addToDo}: FromTodoProps) {

    
    const[formulario, setFormulario] =
                    useState<TodoForm>({
                        titulo:'',
                        prioridad:'Baja'
                    })
     const inputChange=(event:ChangeEvent<HTMLInputElement> | 
                              ChangeEvent<HTMLSelectElement>)=>{
          
          const { name , value } = event.target
    
          setFormulario({
             ...formulario,
             [name] : value
          })
      }


// funcion para tratar el submit
    const envioForm=(event:any)=>{
        //quitar el comportamiebnto 
        // por defecto del form 
        // submit
      event.preventDefault()
      addToDo(formulario.titulo,
              formulario. prioridad)
      //limpiar form:
      setFormulario({
        titulo:"",
        prioridad: "Baja"
      })
    }




  return (
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
  )
}

export default FormTodo
