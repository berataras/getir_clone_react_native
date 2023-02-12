import {StyleSheet} from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        paddingBottom: 30,
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: theme.colors.primary,
        width: "100%",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        paddingVertical: 15,
        fontWeight: "600"
    }
});

export default styles;
