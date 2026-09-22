import type{ Todo } from  '../../interfaces/todos/Form'
import ItemTodo from './ItemTodo'

interface ListTodoProps {
    Todolist: Todo[]
}

/**
 * ListTodo: va a mostrar la 
 *           lista de tareas 
 * lidta de tareas: viene del papa(App.tsx)
 *           y llega aqui  por medio de un 
 *           prop
 * 
 */
function ListTodo({ Todolist }: ListTodoProps) {
  return (
     <section>

        {/* @por hacer: cortar
        y pegar la tabla de tareas
    */}
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
              Todolist.map((todo: Todo)=>(
                <ItemTodo key={todo.id} t={todo} />
               
              ))
            }
          </tbody>

          <tfoot></tfoot>

        </table>

      </section>
    )

}

export default ListTodo