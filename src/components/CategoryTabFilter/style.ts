import {StyleSheet} from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
   wrapper: {
       height: 50,
       width: "100%",
       backgroundColor: "#8C62FE",
       paddingHorizontal: 10
   },
    categoryItem: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 9,
    },
    categoryItemActive: {
        borderBottomWidth: 2.5,
        borderBottomColor: theme.colors.secondary,
    },
    categoryItemText: {
        color: "white",
        fontWeight: "600",
    }
});

export default styles;
