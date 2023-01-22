import {StyleSheet, Dimensions} from "react-native";
import theme from "../../../theme";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    addressHeader: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.colors.secondary,
    },
    address: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "80%",
        paddingLeft: 12,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "white",
        fontSize: 16
    },
    addressIcon:{
        height: 30,
        width: 30,
    },
    addressTypeText:{
        fontWeight: "600",
        fontSize: 16,
        marginLeft: 8
    },
    addressText:{
        fontSize: 12,
        color: theme.colors.gray
    },
    deliveryTime: {
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    deliveryTimeText:{
        fontWeight: "700",
        color: theme.colors.primary
    }
});

export default styles;
