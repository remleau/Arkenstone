import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
    
    const [user, setUser] = useState({
        role: "admin"
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        //check cookie et si cookie setIsLoggedIn(true) setUser(data)
        setIsLoggedIn(true)
    });
    
    return(
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    );
    
};