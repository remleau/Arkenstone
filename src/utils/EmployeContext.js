import React, { useState, createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { postData } from './index';

export const EmployeContext = createContext();

export const EmployeProvider = props => {

    const [cookies] = useCookies();
    const [employes, setEmployes] = useState();

    useEffect(()=>{
        //API CALL
        postData("http://localhost:5000/api/users/all", {
            'token': cookies.user
        }).then(response => {
            if (response.status == 200) {
                setEmployes(response.data)
                console.log(response.data)
            } else {
                console.log(response.data)
            }
        });
    }, [])
        
    return(
        <EmployeContext.Provider value={[employes, setEmployes]}>
            {props.children}
        </EmployeContext.Provider>
    );
    
};
