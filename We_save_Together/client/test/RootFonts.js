// import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import { View } from 'react-native';

// import LoadingScreen from "../screens/loading/LoadingScreen";
 
// export default function RootFonts () {
//     const [isReady, setIsReady] = useState(false);
 
//     const getFonts = async () => {
//         await Font.loadAsync({
//           Cafe24Dangdanghae: require("../../fonts/Korail_Round_Gothic_Bold.ttf"),
//         });
//       };
 
//     return isReady ? (
//         {}
//     ) : (
//         <AppLoading
//             startAsync={getFonts}
//               onFinish={() => setIsReady(true)}
//               onError={() => {}}
//         >

//         </AppLoading>
//       );
// }
