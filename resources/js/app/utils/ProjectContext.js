import React, { useState, createContext, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        {
            name: "allo1",
            statut: "Open"
        },
        {
            name: "allo2",
            statut: "Closed"
        },
        {
            name: "allo3",
            statut: "Pending"
        },
        {
            name: "allo4",
            statut: "Archive"
        }
    ]);
    
    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>
    );
    
};
