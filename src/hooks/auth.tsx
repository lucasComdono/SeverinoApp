import React, 
{ 
    createContext, 
    useContext,
    useState

} from 'react';

type User = {
    id: string;
    email: string;
    token: string;
}
type AuthContextData = {

}

export const AuthContext = createContext({} as AuthContextData);