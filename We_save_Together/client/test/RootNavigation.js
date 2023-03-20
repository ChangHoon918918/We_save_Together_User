//미사용 네비게이션

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeScreen from '../screens/home/HomeScreen';
// import LoadingScreen from '../screens/loading/LoadingScreen';
// import SignInScreen from '../screens/signIn/SignInScreen';
// import CampainListScreen from '../screens/campain/CampainListScreen';

// const Drawer = createDrawerNavigator();

// export default function RootNavigation() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator
//                 initialRouteName='LoadingScreen'
//                 drawerPosition='right'
//                 backBehavior='history'
//                 screenOptions={{
//                     headerShown: false,
//                 }}
//             >
//                 <Drawer.Screen
//                     name='LoadingScreen'
//                     component={LoadingScreen} />
//                 <Drawer.Screen
//                     name='HomeScreen'
//                     component={HomeScreen} />
//                 <Drawer.Screen
//                     name='SignInScreen'
//                     component={SignInScreen} />
//                 <Drawer.Screen
//                     name='CampainListScreen'
//                     component={CampainListScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }