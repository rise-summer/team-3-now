

import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

//import {Ionicons} from '@expo/vector-icons';

export const Bottom = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='Search'/>
      <BottomNavigationTab title='Profile'/>
      
    </BottomNavigation>
  );
};