import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import {Image, Text} from "react-native";

import {HomeStackParamList} from "../types/stack";

const Stack = createStackNavigator<HomeStackParamList>();
function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                      headerStyle: { backgroundColor: "#5C3EBC" },
                      headerTitle: () => (
                          <Image
                              resizeMode="contain"
                              style={{ width: 70, height: 30 }}
                              source={require("../../assets/logo.png")}
                          />
                      ),
                  }}
            />
            <Stack.Screen
                name="Category"
                component={CategoryScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "#5C3EBC"},
                    headerTitle: () => (
                        <Text style={{fontWeight: "bold", color: "white"}}>
                            Ürünler
                        </Text>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;
