import React, { useState, createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { postData } from './../utils';

export const UserContext = createContext();

export const UserProvider = props => {

    const [cookies, removeCookie] = useCookies();
    const [user, setUser] = useState();
    const [users, setUsers] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(cookies.user ? true : false);

    useEffect(()=>{
        if (cookies.user){
            postData("http://localhost:5000/api/user/me", {
                'token': cookies.user,
            }).then(response => {
                if (response.status == 200) {
                    setUser(response.data);
                    setIsLoggedIn(true);
                } else {
                    setUser(false);
                    setIsLoggedIn(false);
                }
            });
        }
    }, []);

    return(
        <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    );
    
};