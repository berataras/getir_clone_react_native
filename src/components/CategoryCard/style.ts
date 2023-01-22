import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    categoryCard: {
        width:width*0.25,
        height:width*0.24,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    categoryCardImage: {
        width:width*0.18,
        height:width*0.18,
        borderRadius:10
    },
    categoryCardText: {
        fontSize:12,
        color:'#616161',
        fontWeight:'500'
    }
})

export default styles;
