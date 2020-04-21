import React, { useState, createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { postData } from './../utils';

export const UserContext = createContext();

export const UserProvider = props => {

    const [cookies, removeCookie] = useCookies();
    const [user, setUser] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(cookies.user ? true : false);

    useEffect(()=>{
        if (cookies.user){
            postData("http://localhost:5000/api/user/me", {
                'token': cookies.user.token,
            }).then(response => {
                if (response.status == 200) {
                    setUser(response.data);
                    setIsLoggedIn(true);
                    console.log(response.data);
                } else {
                    removeCookie('user', { path: '/' });
                    setUser(false);
                    setIsLoggedIn(false);
                }
            });
        }
    }, []);

    return(
        <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    );
    
};