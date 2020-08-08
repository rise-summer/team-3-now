
import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);


const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export const Bottom = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab icon={SearchIcon} title='SEARCH'/>
      <BottomNavigationTab icon={PersonIcon} title='PROFILE' />
     
      
    </BottomNavigation>
  );
};

