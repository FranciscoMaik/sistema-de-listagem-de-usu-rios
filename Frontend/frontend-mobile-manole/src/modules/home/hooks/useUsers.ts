import { useEffect, useState } from "react"
import { IUser } from "../types/IUser"
import { api } from "../../../services/api"

export const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const searchUsers = async () => {
        try {
            const { data } = await api.get("/users")
            setUsers(data.users)

        } catch (error) {
            console.error(JSON.stringify(error));

        }
    }

    useEffect(() => {
        searchUsers()
    }, [])

    return {
        users
    }

}