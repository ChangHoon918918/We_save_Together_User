/** Drawer navigation 설계 */

/** library */
import { createDrawerNavigator } from "@react-navigation/drawer";

/** stack */
import RootStack from "./RootStack";

/** create Drawer Navigation */
const Drawer = createDrawerNavigator();

export default function RootDrawer () {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: 'right', /** Drawer가 오른쪽에서 열리게 함. (Navigator Position option으로 주면 작동 안하니 주의) */
                headerShown: false, /** 기본 제공되는 Drawer Header를 숨기는 코드 */
            }}
        >
            <Drawer.Screen
                name="Drawer_Home"
                component={RootStack} /** RootStack 전체에 Drawer를 내리는 코드 */ />
        </Drawer.Navigator>
    );
}