import React, { createContext, useState } from "react";

const CauseContext = createContext(undefined);
const CauseDispatchContext = createContext(undefined);

function CauseProvider({ children }) {
  const [CauseDetails, setCauseDetails] = useState({
            cause1:{
                hashtagName: 'Black Lives Matter',
                who: 'Americans and Black communities around the world.',
                what:'The Black Lives Matter movement was founded in 2013 after the murder of Trayvon Martin. On May 25th, 2020, the Minneapolis police murdered George Floyd, sparking protests across the world in the name of the #BlackLivesMatter movement, mobilizing against police brutality and anti-Black racism. Most recently, Jacob Blake of Kenosha, Wisconsin has been paralyzed by the police after being shot 7 times at close range. Protests are continually being organized as protesters demand justice for lives of Black Americans lost to anti-Black racism.',
                where: 'The United States',
                coord: '',
                why:'Black Americans are being killed by police and the United States carceral system at extremely disproportionate rates.',
                imgURL: 'https://news.cgtn.com/news/2020-05-31/Thousands-rally-in-Toronto-as-police-probe-Korchinski-Paquet-s-death--QWE3JcrPig/img/dddc7a4d81b1410f8a7aabffec98efcf/dddc7a4d81b1410f8a7aabffec98efcf.png'
            },
            cause2:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause3:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause4:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause5:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause6:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause7:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause8:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause9:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
            },
            cause10:{
                hashtagName: '',
                who: '',
                what:'',
                where: '',
                coord: '',
                why:'',
                imgURL: ''
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
