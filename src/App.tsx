import {Routes, 
        Route, 
        NavLink
      } from 
  'react-router-dom'
import TodoPage from './pages/todos/TodoPage'
import UserPage from './pages/users/UserPage'

const App = () => {
  return(
    //Bloque de navegacion global 
    <>
    <nav className='navbar'>
      <NavLink to="/todos">
        Tareas
      </NavLink>
      <NavLink to="/users">
          Usuarios
      </NavLink>
    </nav>
    <main>
      <Routes>
          <Route 
              path='/todos'
              element={<TodoPage />}
          />
          <Route 
              path= '/users'
              element={<UserPage />}    
          />
      </Routes>
    </main>
    </>
  )

}


export default App