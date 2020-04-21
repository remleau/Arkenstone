import React, { useState, createContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        {
            name: "allo1",
            statut: {
                key: 'open',
                label: 'Open'
            }
        }
    ]);
        
    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>
    );
    
};
