import React from 'react'
import type { Todo } from '../../interfaces/todos/Form'
import { FiAlertTriangle } from "react-icons/fi";

interface ItemTodoProps{
    t: Todo

}

function ItemTodo({t} : ItemTodoProps) {
  return (
     <tr>

                  <td>{ t.id }</td>
                  <td>{ t.titulo }</td>
                  <td>{ t.prioridad }</td>
                  {/*
                  OPERADOR TERNARIO*/
                  }

                  <td>
                    { (t.completada)===true ? 
                      
                      <span style={
                        { 
                          color:"rgb(70, 252, 46)" ,
                          backgroundColor:"aqua" 
                        }
                      }>
                        si 
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
    
  )
}

export default ItemTodo