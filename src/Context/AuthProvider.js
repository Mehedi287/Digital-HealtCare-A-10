import React, { createContext } from 'react';
import useFirebase from '../hook/UseFirebase';

export const AuthContext = createContext()
const AuthProvider = (props) => {
    const { children } = props;
    const allContexts = useFirebase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;