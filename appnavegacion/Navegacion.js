
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign  from  '@expo/vector-icons/AntDesign';

import Setting from './Screnm/Setting';
import Home from './Screnm/Home';
import Users from './Screnm/Users';
import DetailHome from './Screnm/DatailHome';
import AnotherDatailisHome from './Screnm/AnotherDatailisHome';

const Stack = createStackNavigator();

function stackDetailHome(){
    return(
        <DetailsHomeNavegator.Navigator
        intialRouteName="Home">
            <DetailsHomeNavegator.Screen 
            name="Home" 
            component={Home}>
            </DetailsHomeNavegator.Screen>
            <DetailsHomeNavegator.Screen
            name="DetailHome"
            component={DetailHome}>
            </DetailsHomeNavegator.Screen>
            <DetailsHomeNavegator.Screen
            name="AnotherDatailisHome"
            component={AnotherDatailisHome}>
            </DetailsHomeNavegator.Screen>

        </DetailsHomeNavegator.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function Mytabs(){
    return(
        <Tab.Navigator 
        intialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: 'purple',
        }}>
            <Tab.Screen name="HomeScreen" component={stackDetailHome} 
            options= {{
                tabBarlalel: 'HomeScree',
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={30} color={color} />
                ),
                headerShown: false,
            }}
            />
            <Tab.Screen name="Users" component={Users} 
            options={{
                tabBarlalel: 'Users',
                tabBarIcon: ({color}) => (
                    <AntDesign name="user" size={30} color={color} />
                )
            }}
            />
            <Tab.Screen name="Setting" component={Setting}
            options={{
                tabBarlalel: 'Setting',
                tabBarIcon: ({color}) => (
                    <AntDesign name="setting" size={30} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
};
export default function Navegacion(){
    return(
        <NavigationContainer>
            <Mytabs/>
        </NavigationContainer>
    )
};