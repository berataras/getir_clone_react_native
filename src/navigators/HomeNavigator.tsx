import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Image, Text, TouchableOpacity} from "react-native";
import {Ionicons, Foundation} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

import {HomeStackParamList} from "../types/stack";
import {
    getFocusedRouteNameFromRoute,
    useNavigation
} from "@react-navigation/native";

const Stack = createStackNavigator<HomeStackParamList>();
function MyStack({navigation, route}: any) {
    const navigations = useNavigation();
    const tabHiddenRoutes = ["ProductDetails","CartScreen"];

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(routeName as string)) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation, route]);

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
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "#5C3EBC"},
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigations.goBack()}
                            style={{ paddingLeft: 9 }}
                        >
                            <Ionicons
                                name="close"
                                size={26}
                                color="white"
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 10 }}>
                            <Foundation
                                style={{ marginRight: 8 }}
                                name="heart"
                                size={26}
                                color="#32177a"
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <Text style={{fontWeight: "bold", color: "white"}}>
                            Ürün Detayı
                        </Text>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

export default function HomeNavigator({navigation, route}:any) {
    return <MyStack navigation={navigation} route={route} />;
}
