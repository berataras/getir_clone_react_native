import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";
import styles from "./style";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {productDetailScreenProp} from "../../types/screen";
function ProductCard({image, price, discountPrice, name, amount}: any) {
    const navigation = useNavigation<productDetailScreenProp>();
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("ProductDetails")}>
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />
            <View style={{ flexDirection: "row", marginTop: 10,alignItems:'center' }}>
                <Text style={styles.price}>
                    <Text>{"\u20BA"}</Text>{price}
                </Text>
                <Text style={styles.discountPrice}>
                    <Text>{"\u20BA"}</Text>{discountPrice}
                </Text>
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.amount}>{amount}</Text>

            <TouchableOpacity style={styles.addToCartButton}>
                <Entypo name="plus" size={22} color="#5D3EBD" />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default ProductCard;
