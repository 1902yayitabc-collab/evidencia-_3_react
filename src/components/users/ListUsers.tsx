import type { IUser } from '../../interfaces/users/IUser'

interface ListUsersProps{
    u:IUser[]
}

const ListUsers = ({u}:ListUsersProps) => {
  return (
    <section>
        <h1>Lista de usuarios</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                {
                    u.map((us:IUser)=>(
                        <tr key={us.id}>
                            <td>{ us.nombre }</td>
                            <td>{ us.email }</td>
                            <td>{ us.rol }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </section>
  )
}

export default ListUsers