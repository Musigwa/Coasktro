import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from 'routes/Tabs';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default App;
