import {useState ,
        useEffect} from 'react'
import ListUsers from '../../components/users/ListUsers'
import FormUser from '../../components/users/FormUser'
import type { IUser, Rol } from '../../interfaces/users/IUser'
import { getAllUsers, createUser } from '../../services/UserService'

const UserPages = () => {

    //crear un listado de usuarios 
  const [ listaUsers ,
          setlistaUsers
        ] = useState<IUser[]>([])
    
  useEffect(()=>{
          const consultar = async() => {
              //llame al servicio
              //para traer datos
               const datos= await getAllUsers()
               //cargar el estado
                //con los datos traidos
               setlistaUsers(datos)
          }
          consultar()
  },[])

  //crear funcion para añadir
  // nuevo usuario a listaUsers
  const addUser = async (nombre: string, email: string, rol: Rol) => {
    //nuevo usuario
    const usuario: IUser = {
      id: crypto.randomUUID(),
      nombre: nombre,
      email: email,
      rol: rol
    }

    //guardar el nuevo usuario
    //en la api
    const nuevaData = await createUser(usuario)

    //poner el nuevo usuario
    // en la lista
    setlistaUsers((prev)=>[...prev, nuevaData])
  }

  return (
    <>
        <FormUser addUser={addUser} />
        <ListUsers u={listaUsers} />
    </>
  )
}

export default UserPages