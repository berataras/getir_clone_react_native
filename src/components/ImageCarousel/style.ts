import {StyleSheet} from "react-native";
import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 25
    },
    carousel: {
        height: height * 0.2,
        width: width * 0.5
    },
    image: {
        height: height * 0.2,
        width: width * 0.5,
        resizeMode: "stretch"
    },
    dots:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:15,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 20,
        marginVertical:2,
        marginHorizontal:5
    },
    activeDot: {
        backgroundColor: "#5D3EBD"
    },
    noActiveDot: {
        backgroundColor: "#F2F0FD",
    }
})

export default styles;
