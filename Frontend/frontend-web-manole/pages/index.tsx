import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { IUser } from '../modules/types/IUser'
import { FaRegTrashAlt, FaInfoCircle } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";

import * as S from '../modules/home/styles/stylesHome'
import { useTheme } from 'styled-components';
export default function Home() {
  const {colors} = useTheme()
  const [users, setUsers] = useState<IUser[]>([])

  const searchUsers = async () => {
    try {
      const {data} = await api.get("/users")
      setUsers(data.users)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchUsers()
  }, [])

  return (
    <S.Container>
      <div className="header">
        <h2>Lista de clientes</h2>
        <S.ButtonAdd>
          Adicionar
        </S.ButtonAdd>
      </div>
      {users.map((user) => (
        <S.CardUser key={user.id}>
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
          <div className="icons">
            <FaRegTrashAlt color='red' size={17}/>
            <LuInfo size={18} color={colors.green700}/>
          </div>
        </S.CardUser>
      ))}
    </S.Container>
  )
}
