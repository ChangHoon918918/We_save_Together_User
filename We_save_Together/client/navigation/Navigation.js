/** App 전체를 navigation container로 포장 */

/** library */
import { NavigationContainer } from "@react-navigation/native";

/** drawer */
import RootDrawer from "./RootDrawer";

export default function Navigation () {
    return (
        <NavigationContainer>
            <RootDrawer/>
        </NavigationContainer>
    )
}