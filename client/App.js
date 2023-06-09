import React, {useState} from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

// appLoading
import AppLoading from 'expo-app-loading';

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//credentials context
import { CredentialsContext } from './components/CredentialsContext';

//apk build
//npm install -g eas-cli
//eas build:configure
//eas build -p android --profile preview

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage
    .getItem('We_save_together')
    .then((result) => {
      if(result !== null){
        setStoredCredentials(JSON.parse(result));
      } else {
        setStoredCredentials(null);
      }
    })
    .catch(error=> console.log(error))
  }

  if (!appReady) {
    return (
    <AppLoading  
      startAsync={checkLoginCredentials}
      onFinish={() => setAppReady(true)}
      onError={console.warn}
    />)
  }
  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <RootStack />
    </CredentialsContext.Provider>
  );
}