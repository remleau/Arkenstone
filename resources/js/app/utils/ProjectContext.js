import React, { useState, createContext, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
        {
            name: "allo1",
            statut: {
                key: 'open',
                label: 'Open'
            }
        },
        {
            name: "allo2",
            statut: {
                key: 'open',
                label: 'Open'
            }
            //statut: "Closed"
        },
        {
            name: "allo3",
            statut: {
                key: 'pending',
                label: 'Pending'
            }
        },
        {
            name: "allo4",
            statut: {
                key: 'archived',
                label: 'Archived'
            }
        }
    ]);

    window.Echo.channel('message')
    .listen('.message.created', (e) => {
        console.log(e.invite)
        setProjects(prevProjects => [...prevProjects, {
          name: 'test live',
          statut: {
            // Don't need to send the label
            key: 'live',
            label: 'Live'
          }
        }]);
    });

    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>
    );
    
};
