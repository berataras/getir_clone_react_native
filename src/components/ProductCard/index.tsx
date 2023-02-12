import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";
import styles from "./style";
import {Entypo} from "@expo/vector-icons";
function ProductCard({item}: any) {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://cdn.getir.com/product/5ced4830d349d10001e7055f_tr_1584536178243.jpeg",
                }}
            />
            <View style={{ flexDirection: "row", marginTop: 10,alignItems:'center' }}>
                <Text style={styles.price}>
                    <Text>{"\u20BA"}</Text>13
                </Text>
                <Text style={styles.discountPrice}>
                    <Text>{"\u20BA"}</Text>12
                </Text>
            </View>
            <Text style={styles.name}>Magnum Dondurma</Text>
            <Text style={styles.amount}>40 g</Text>

            <TouchableOpacity style={styles.addToCartButton}>
                <Entypo name="plus" size={22} color="#5D3EBD" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default ProductCard;
