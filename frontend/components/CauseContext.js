
import React, { createContext, useState } from "react";

const CauseContext = createContext(undefined);
const CauseDispatchContext = createContext(undefined);

function CauseProvider({ children }) {
  const [CauseDetails, setCauseDetails] = useState({
           cause1: {
               hashtagName: 'COVID-19',
                who: 'N/A',
                what:'N/A',
                when: 'NOW',
                why:'N/A'
            }, 
            cause2:{
                hashtagName: 'Black Lives Matter',
                who: 'Black-Americans and other members of the Black community around the world.',
                what:'A movment advocating for non-violent civil disobedience in protest against incidents of police brutality and all racially motivated violence against Black-Americans',
                when: 'NOW',
                why:'Black-Americans are being discriminated against, target and killed at disproportion rates.'

            }
  });

  return (
    <CauseContext.Provider value={CauseDetails}>
      <CauseDispatchContext.Provider value={setCauseDetails}>
        {children}
      </CauseDispatchContext.Provider>
    </CauseContext.Provider>
  );
}

export { CauseProvider, CauseContext, CauseDispatchContext };


