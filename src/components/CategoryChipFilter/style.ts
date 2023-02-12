import {StyleSheet} from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        height: 60,
        paddingHorizontal: 10
    },
    chip: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingRight: 9,
    },
    chipText:{
        borderWidth: 1,
        borderColor: "#F2F2F2",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 10,
        color: theme.colors.primary,
        fontWeight: "600",
        overflow: "hidden"
    },
    activeChip: {
        backgroundColor: theme.colors.primary,
        color: "white",
    }
});

export default styles;
