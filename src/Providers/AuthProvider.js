import {  createContext, useContext,  useState } from "react";


export const AuthProviderContext = createContext();
export const AuthProviderContextDispacher = createContext();


const AuthProvider = ({children}) => {
    const [state , setState] = useState(false);

    return ( 
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispacher.Provider value={setState}>
                {children}
            </AuthProviderContextDispacher.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispacher);
