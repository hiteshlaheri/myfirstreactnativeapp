import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { UserFinalWithFn } from './Components/AddUser';
import store from './Store/store';


const App= ()  => {
  return (
   <Provider store={store}>
     <SafeAreaView>
    <ScrollView>
       <UserFinalWithFn/>
     </ScrollView>
     </SafeAreaView>
  </Provider>
  );
};



export default App;
