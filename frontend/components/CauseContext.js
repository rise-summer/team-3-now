import React, { createContext, useState } from "react";

const CauseContext = createContext(undefined);
const CauseDispatchContext = createContext(undefined);

function CauseProvider({ children }) {
  const [CauseDetails, setCauseDetails] = useState({

            cause1:{

                hashtagName: 'COVID-19',
                who: ' Humans',
                what:'A virus that causes sickness in animals and humans, mainly in the upper respiratory',
                where: 'Worldwide',
                coord: '',
                why:'Thousands of people are dying from the virus on a weekly bases all around the world. Its causing dramatic changes in the community.',
                imgURL: 'https://ewscripps.brightspotcdn.com/dims4/default/4e2794b/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fc2%2Fb2%2Fe7083f0b4c878daba93a4067d483%2Fcoronavirus-background-1280x720.jpg'

               },
            cause2:{
                hashtagName: 'Black Lives Matter',
                who: 'Americans and Black communities around the world.',
                what:'The Black Lives Matter movement was founded in 2013 after the murder of Trayvon Martin. On May 25th, 2020, the Minneapolis police murdered George Floyd, sparking protests across the world in the name of the #BlackLivesMatter movement, mobilizing against police brutality and anti-Black racism. Most recently, Jacob Blake of Kenosha, Wisconsin has been paralyzed by the police after being shot 7 times at close range. Protests are continually being organized as protesters demand justice for lives of Black Americans lost to anti-Black racism.',
                where: 'The United States',
                coord: '',
                why:'Black Americans are being killed by police and the United States carceral system at extremely disproportionate rates.',
                imgURL: 'https://news.cgtn.com/news/2020-05-31/Thousands-rally-in-Toronto-as-police-probe-Korchinski-Paquet-s-death--QWE3JcrPig/img/dddc7a4d81b1410f8a7aabffec98efcf/dddc7a4d81b1410f8a7aabffec98efcf.png'
            
            },
            cause3:{
                hashtagName: '2020 US Elections',
                who: 'Residents of the United States and its territories',
                what:'On November 3rd, 2020, eligible voters will elect a new president or re-elect Republican incumbent Donald Trump. His Democratic opponent is Joe Biden, the Vice President of former President Barack Obama. The presidential election will occur simultaneously with elections to the Senate and the House of Representatives..',
                where: 'The United States',
                coord: '',
                why:'Presidential elections keep democracy functioning and allow United States Citizens to exersice their right to vote and select their own government',
                imgURL: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/9665/production/_113810583_index_promo_poll_tracker_bw_976.png'
            },
            cause4:{
                hashtagName: 'School Reopenings',
                who: 'All students, families, teachers, and school employees in the United States.',
                what:'Schools all over the USA are determining whether to reopen in person, virtually, or a mix of the two. The CDC recommends schools consider “how to protect the health, safety, and wellbeing of students, teachers, staff, their families, and communities”, along with some suggested guidelines to follow. Ultimately, schools must weigh the advantages of school being in person versus the risk associated with spreading COVID-19 to teachers, students, and administrators.',
                where: 'United States',
                coord: '',
                why:'Schools and families are considering health risks and contingency plans and have to make the decision of how schools are to operate this upcoming school year and this affects a majority of the US population.',
                imgURL: 'https://aarjb2jw4n53e35fhbquj418-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/child-with-face-mask-back-at-school-after-covid-19-JNMLF65.jpg'
            },
            cause5:{
                hashtagName: 'Free Palestine Movement',
                who: 'Palestine & Israel',
                what:'The Israeli-Palestinian conflict began nearly a century ago and largely concerns territory. The Free-Palestine movement is to advocate for Palestinian human rights and the right to their country. Most recently, Israel has been bombing the Gaza strip, over allegations that in Southern Israel, Palestinians had fired a rocket. Israel has warned Hamas that they are risking war in the Gaza strip if they do not cease launching incendiary ballots and rockets.',
                where: 'Gaza Strip, Palestine',
                coord: '',
                why:'Tensions are high between Israel and Palestine over the bombing of the Gaza strip, and this could lead to war.',
                imgURL:'https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/palestine_jerusalem_aqsa_afp_31519.jpg?itok=oQCdFq8D'
            },
            cause6:{
                hashtagName: 'Beirut, Lebanon Explosion',
                who: 'Lebanese people, Lebanese government',
                what:'On August 4, 2020 a warehouse fire in Lebanon, near Beirut’s port, ignited a cache of over 2000 metric tons of explosive ammonium nitrate. Over 130 people were killed in the explosion and over 5000 were injured in the blast which was felt up to 150 miles away and is being considered one of the most powerful non-nuclear explosions in history. An estimated 300,000 people are left homeless due to the over $3 billion (USD) in property damage, and the Lebanese government declared a state of emergency in response to the disaster',
                where: 'Beirut, Lebanon',
                coord: '',
                why:'In the aftermath of the explosion, protests erupted across Lebanon against the government for their failure to prevent the disaster, joining a larger series of protests which have been taking place in the country since 2019. The protests and political pressure lead to the Prime Minister Hassan Diab and the Lebanese cabinet resigning on 10 August 2020. The financial setback of the explosion is occuring amidst the Covid-19 pandemic that has strained healthcare systems and economies across the world.',
                imgURL: 'https://www.ecuavisa.com/sites/default/files/fotos/2020/08/07/libano_beirut_explosion_0.jpg'
            },
            cause7:{
                hashtagName: 'Junk Terror Bill-Philippines',
                who: 'Everyone in the Philippines and Filipinos living abroad. More specifically, this bill heavily impacts community leaders, farmers, and local journalists.',
                what:'With the Anti-Terrorism Bill, the Philippine Government has broadened the definition of terrorism. Any one who opposes or dissents the actions of the government is subject to arrest without the chance to appeal.',
                where: 'The Philippines and other countries where Filipino identifying people reside.',
                coord: '',
                why:'People’s human rights are at risk with this broadened definition of terrorism. By speaking out against the government or engaging in other acts deemed as “terrorism,” people are at risk of being arrested without the chance to appeal.',
                imgURL: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7BFP2TFGNQI6VCMOWINZVA7XSI.jpg '
            },
            cause8:{
                hashtagName: 'Yemen Resource Crisis',
                who: 'Over 80% of Yemen’s population',
                what:'Yemen has been in a state of prolonged internal conflict since 2015 which has put the country in the middle of a large humanitarian crisis with more than 24 million people in need. With recent events and the spread of COVID-19 worldwide, Yemen faces shortages in areas like sanitation and clean water as well as functioning health facilities. Of the health facilities that are functioning, most lack basic equipment like masks and gloves. As a result, much of the population lacks access to not only healthcare, but also basic necessities needed to survive. ',
                where: 'Yemen',
                coord: '',
                why:'More than 80% of Yemen’s population (~24 million people) are in need of assistance to just survive. Over 20 million Yemenis are food insecure and over 19 million don’t have access to clean water and sanitation. ',
                imgURL: 'https://www.unocha.org/sites/unocha/files/OCHA_Category/Top_Stories/yemenphotos_0.JPG'
            },
            cause9:{
                hashtagName: 'The Murder of Hacaluu Hundesa - Ethiopia',
                who: 'Ethiopian people, particularly the Omoro and Amahara ethnic groups as well as the current government under Prime Minister Abiy Ahmed.',
                what:'Ethnic unrest in the aftermath of the killing of Ethiopian singer Hachalu Hundessa has left over 150 people dead. Hachalu gave a voice to feelings of marginalization among fellow members of his Oromo ethnic group. Since his death, Oromo nationalists feel the government minister has failed to champion their interests or handle the muder, leading to protests',
                where: 'Oromia, Ethiopia',
                coord: '',
                why:'Hachalu’s music was a political symbol of the Oromo peoples aspirations. His killing has led to violent protests and demonstrations and incited existing political tensions. People are unhappy with the government’s response and are demanding accountability.',
                imgURL: 'https://www.aljazeera.com/mritems/Images/2020/7/5/048db0ba6da546a1979c903a6ee1795f_18.jpg'
            },
            cause10:{
                hashtagName: 'California Wildfires',
                who: 'Residents of California',
                what:'California is in a state of emergency as 1,603,541 acres of land (and counting) are being devastated by wildfires caused by a combination of lighting and intense weather conditions.',
                where: 'California',
                coord: '',
                why:'Under these extreme conditions, many people living in California are being displaced. As these fires release toxic fumes into the air, they are also posing health risks in addition to the ongoing COVID-19 Pandemic. ',
                imgURL: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CAYGKTXENAI6VAWYLZK5I7UQZI.jpg&w=916'
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
