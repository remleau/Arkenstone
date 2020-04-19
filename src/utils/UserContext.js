import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {

    const [user, setUser] = useState({
        role: "admin"
    });

    let cookie = true;
    const [isLoggedIn, setIsLoggedIn] = useState((cookie ? true : false));
    
    useEffect(()=>{
        //check cookie et si cookie setIsLoggedIn(true) setUser(data)
        // setIsLoggedIn(true)
    },[isLoggedIn,user]);

    return(
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    );
    
};
