/** Stack navigation 설계 */

/** library */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** screens */
import LoadingScreen from "../screens/loading/LoadingScreen";
import SignInScreen from "../screens/signIn/SignInScreen";
import SocialSignInScreen from "../screens/socialSignIn/SocialSignInScreen";
import HomeScreen from "../screens/home/HomeScreen";

import WaitAlterScreen from "../screens/alter/WaitAlterScreen";

/** create Stack Navigation */
const Stack = createNativeStackNavigator();

export default function RootStack () {
  return (
    <Stack.Navigator
      initialRouteName="Loading_Screen" /** App 실행시 최초로 보여질 화면 선언 */
      screenOptions={{
        headerShown: false /** 기본 제공되는 STack Header를 숨기는 코드 */
      }} 
    >
      {/** stack에서 사용할 화면들 선언 */}
      <Stack.Screen name="Social_SignIn_Screen" component={SocialSignInScreen} />
      <Stack.Screen name="SignIn_Screen" component={SignInScreen} />
      <Stack.Screen name="Loading_Screen" component={LoadingScreen} />
      <Stack.Screen name="Home_Screen" component={HomeScreen} />
      
      <Stack.Screen name="WaitAlter_Screen" component={WaitAlterScreen} />
    </Stack.Navigator>
  );
}