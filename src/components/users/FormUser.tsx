import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { IUserForm, Rol } from '../../interfaces/users/IUser'

//interface en la cual 
// definimos un prop funcion
interface FormUserProps{
    addUser: (nombre: string, email: string, rol: Rol) => void
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

function FormUser({ addUser }: FormUserProps) {

    const [formulario, setFormulario] =
                    useState<IUserForm>({
                        nombre: '',
                        email: '',
                        rol: 'Dev'
                    })

    const inputChange = (event: ChangeEvent<HTMLInputElement> |
                              ChangeEvent<HTMLSelectElement>) => {

          const { name, value } = event.target

          setFormulario({
             ...formulario,
             [name]: value
          })
    }

    // funcion para tratar el submit
    const envioForm = (event: React.FormEvent<HTMLFormElement>) => {
        //quitar el comportamiento
        // por defecto del form
        // submit
      event.preventDefault()
      addUser(formulario.nombre,
              formulario.email,
              formulario.rol)
      //limpiar form:
      setFormulario({
        nombre: '',
        email: '',
        rol: 'Dev'
      })
    }

  return (
    <section style={estilosFormulario.formulario}>
        <h2 style={estilosFormulario.titulo}>
          Nuevo usuario
        </h2>
         <form onSubmit={envioForm}>

              <div>
                  <label>Nombre:</label>

                  <input
                        type="text"
                        id="nombre"
                        placeholder="p.ej Dayana Bejarano"
                        name="nombre"
                        onChange={inputChange}
                        value={formulario.nombre}
                        style={estilosFormulario.input}
                   />
              </div>

              <div>
                  <label>Email:</label>

                  <input
                        type="email"
                        id="email"
                        placeholder="p.ej dayana@gmail.com"
                        name="email"
                        onChange={inputChange}
                        value={formulario.email}
                        style={estilosFormulario.input}
                   />
              </div>

              <div>
                  <label htmlFor=''>Rol:</label>

                  <select
                      id="rol"
                      name="rol"
                      onChange={inputChange}
                      value={formulario.rol}
                      style={estilosFormulario.input}
                    >

                      <option value="Admin">Admin</option>
                      <option value="Dev">Dev</option>

                    </select>
              </div>

              <div>
                  <button
                    type="submit"
                    style={estilosFormulario.boton}
                  >
                      crear Usuario
                  </button>
              </div>

         </form>
    </section>
  )
}

export default FormUser