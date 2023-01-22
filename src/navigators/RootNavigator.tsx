import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    Entypo,
    MaterialCommunityIcons,
    FontAwesome
} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import {TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

function RootNavigator() {
    const CustomTabBarButton = () => {
        return (
            <TouchableOpacity
                style={{
                    borderColor: "white",
                    borderWidth: 2,
                    borderRadius: 32,
                    justifyContent: "center",
                    marginTop: -8,
                    alignItems: "center",
                    backgroundColor: "#5C3EBC",
                    width: 55,
                    height: 55,
                    shadowColor: '#171717',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                }}
            >
                <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Sell"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton />,
                }}
            />

            <Tab.Screen
                name="Messenger"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}

            />
            <Tab.Screen
                name="İlanlarım"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />            ),
                }}
            />
        </Tab.Navigator>
    );
}

export default RootNavigator;
