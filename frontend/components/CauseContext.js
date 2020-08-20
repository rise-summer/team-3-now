import React, {useState, createContext} from 'react';



export const CauseConstext= createContext();

export const CauseProvider = (props) => {
    
    const [causes, setCauses] = useState({
        
        tracks:[
        {
             hashtageName: 'Black Lives Matter',
            //  who: 'Black-Americans and other members of the Black community around the world.',
            //  what:'A movment advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against Black-Americans',
            //  when: 'NOW',
            //  why:'Black-Americans are being discriminated against, target and killed at disproportion rates.'
        },{
            hashtageName: 'COVID-19',
            // who: 'N/A',
            // what:'N/A',
            // when: 'NOW',
            // why:'N/A'
        },
       ],
      });
       return(
        <CauseConstext.Provider value={[causes, setCauses]}>
            {props.children}
        </CauseConstext.Provider>
    ); 
    
    
};
