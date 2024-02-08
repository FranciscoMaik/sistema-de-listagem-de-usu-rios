import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { IUser } from '../modules/types/IUser'
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

import * as S from '../modules/home/styles/stylesHome'
import { useTheme } from 'styled-components';
import { ModalUserInfo } from '../modules/home/components/ModalUserInfo';
import { ModalAddUser } from '../modules/home/components/ModalAddUser';
import { ModalEditUser } from '../modules/home/components/ModalEditUser';
export default function Home() {
  const {colors} = useTheme()
  const [users, setUsers] = useState<IUser[]>([])
  const [userUnique, setUserUnique] = useState<IUser | null>(null)
  const [showModalUser, setShowModalUser] = useState(false)
  const [showModalAddUser, setShowModalAddUser] = useState(false)
  const [showModalEditUser, setShowModalEditUser] = useState(false)
  const [id, setId] = useState("")

  const searchUsers = async () => {
    try {
      const {data} = await api.get("/users")
      setUsers(data.users)
    } catch (error) {
      console.error(error);
    }
  }

  const deleteUser = async (id: string) => {
    try {
      await api.delete(`/users/${id}`)
      setUsers(prev => prev.filter((user) => user.id !== id))
    } catch (error) {
      console.error(error);
    }
  }

  const handleShowModalUser = (id: string) => {
    setId(id)
    setShowModalUser(true)
  }

  const handleShowModalEditUser = (userToEdit: IUser) => {
    setUserUnique(userToEdit)
    setShowModalEditUser(true)
  }

  useEffect(() => {
    searchUsers()
  }, [])

  return (
    <>
      <S.Container>
        <div className="header">
          <h2>Lista de Usuários</h2>
          <S.ButtonAdd onClick={() => setShowModalAddUser(prev => !prev)}>
            Adicionar
          </S.ButtonAdd>
        </div>
        {users.map((user) => (
          <S.CardUser key={user.id}>
             <div className="icons">
              <FaRegTrashAlt color={colors.red200} size={17} onClick={() => deleteUser(user.id)}/>
              <LuInfo size={18} color={colors.green700} onClick={() => handleShowModalUser(user.id)}/>
              <FaRegEdit color={colors.blue200} size={18} onClick={() => handleShowModalEditUser(user)}/>
            </div>
            <div>
              <S.InfoUser>
                <strong>Nome: </strong>
                <p>{user.name}</p>
              </S.InfoUser>
              <S.InfoUser>
                <strong>Email: </strong>
                <p>{user.email}</p>
              </S.InfoUser>
            </div>
           
          </S.CardUser>
        ))}
      </S.Container>

      <ModalUserInfo id={id} isOpen={showModalUser} onClose={() => setShowModalUser(prev => !prev)}/>
      <ModalAddUser isOpen={showModalAddUser} onClose={() => setShowModalAddUser(prev => !prev)} updateList={searchUsers}/>
      <ModalEditUser isOpen={showModalEditUser} onClose={() => setShowModalEditUser(prev => !prev)} updateList={searchUsers} userReceived={userUnique}/>
    </>
  )
}
