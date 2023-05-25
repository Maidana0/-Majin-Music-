import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'

export const LogContext = createContext()

const ContextProvider = ({ children }) => {
    const router = useRouter() // Link Active
    const [user, setUser] = useState(false)
    const [log, setLog] = useState(false)

    const login = (u) => setUser(u)
    const logout = () => setUser(false)

    useEffect(() => {
        localStorage.getItem('user') && setUser(localStorage.getItem('user'))
    }, [])
    useEffect(() => setLog(user), [user])

    return (
        <LogContext.Provider
            value={{
                log,
                login,
                logout,
                router
            }}>
            {children}
        </LogContext.Provider>
    )
}
export default ContextProvider