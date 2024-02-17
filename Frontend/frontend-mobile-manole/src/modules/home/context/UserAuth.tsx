import {
    PropsWithChildren,
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { IUser } from '../types/IUser'
import { api } from '../../../services/api'
import { Alert } from 'react-native'

type UserContextProps = PropsWithChildren

export interface UserContextStateProps {
    users: IUser[]
    userId: string
    setIdUser: React.Dispatch<React.SetStateAction<string>>
    userUnique?: IUser
    removeClient: (id: string) => void
}

const UserContext = createContext({} as UserContextStateProps)

const UserProvider: React.FC<UserContextProps> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>([])
    const [idUser, setIdUser] = useState<string>("")
    const [userUnique, setUserUnique] = useState<IUser>()

    const searchUsers = async () => {
        try {
            const { data } = await api.get("/users")
            setUsers(data.users)

        } catch {
            Alert.alert("Listagem", "Não foi possível buscar os clientes!")
        }
    }

    const searchOnlyUser = async () => {
        try {
            const { data } = await api.get(`/users/${idUser}`)
            setUserUnique(data.user)
        } catch {
            Alert.alert("Error", "Não foi possível buscar as informações do cliente!")
        }
    }

    const removeClient = async (id: string) => {
        try {
            await api.delete(`/users/${id}`)
            setUsers(prev => prev.filter(user => user.id !== id))
        } catch {
            Alert.alert("Error", "Não foi possível deletar o cliente!")
        }
    }

    useEffect(() => {
        if (!idUser) return;
        searchOnlyUser()
    }, [idUser])

    useEffect(() => {
        searchUsers()
    }, [])

    return (
        <UserContext.Provider
            value={{
                users,
                userId: idUser,
                setIdUser,
                userUnique,
                removeClient
            }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }