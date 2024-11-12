import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "../functions/functions";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    useEffect(() => {
        getCurrentUser(setUser);
    }, []);
    
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
} 