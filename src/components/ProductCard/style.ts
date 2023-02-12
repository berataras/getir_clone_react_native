import {StyleSheet} from "react-native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: {
        position: "relative",
        width: width * 0.25 + 10,
        flexDirection: "column",
        alignItems: "flex-start",
        margin: 10,
    },
    image: {
        width: width * 0.25 + 10,
        height: 80,
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: "gray",
    },
    price: {
        textDecorationLine: "line-through",
        color: "#747990",
        fontWeight: "bold",
        fontSize: 12,
    },
    discountPrice: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft:4
    },
    name: {
        fontWeight:'600',
        fontSize:13,
        marginTop:4
    },
    amount: {
        color:'#747990',
        fontSize:12,
        marginTop:4,
        fontWeight:'600'
    },
    addToCartButton: {
        position:'absolute',
        borderWidth:0.3,
        right: -10,
        top: -6,
        borderRadius:6,
        shadowRadius: 3.8,
        shadowOpacity: 0.05,
        borderColor:'lightgrey',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30
    }
})

export default styles;
