import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "./stack";

export type categoryScreenProp = StackNavigationProp<HomeStackParamList, 'Category'>;
export type productDetailScreenProp = StackNavigationProp<HomeStackParamList, 'ProductDetails'>;
