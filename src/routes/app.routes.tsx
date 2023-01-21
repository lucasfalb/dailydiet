import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { NewMeal } from "@screens/NewMeal";
export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='statistics'
                component={Statistics}
            />
             <Screen 
                name='newMeal'
                component={NewMeal}
            />
        </Navigator>
    )
}