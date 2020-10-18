import React, {createContext, useState} from 'react';
import Auth from '../services/auth';

interface AuthContextData{
    signed: boolean,
    user: string | null,
    auth(): Promise<void>,
    logout(): void,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<string | null>(localStorage.getItem('user'))

    async function auth(){
        const response = await Auth();
        setUser(response.user);
        localStorage.setItem('user', response.user);
    }

    function logout(){
        setUser(null);
        localStorage.removeItem('user');
    }

    //!!user - se existir alguma coisa no user, retorna true, senão false
    return (<AuthContext.Provider value={{signed: !!user, user: user, auth, logout}}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthContext;