import React from 'react';
import products from "../../../assets/data/products";
import ProductCard from "../ProductCard";
import {View} from "react-native";
import styles from "./style";
import {useNavigation} from "@react-navigation/native";
import {productDetailScreenProp} from "../../types/screen";

function ProductContainer() {
    const navigation = useNavigation<productDetailScreenProp>();
    return (
        <View style={styles.wrapper}>
            {products.map((item, index) => (
                <ProductCard
                    key={index}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    discountPrice={item.discountPrice}
                    onPress={() => navigation.navigate("ProductDetails", {product: item})}
                />
            ))}
        </View>
    );
}

export default ProductContainer;
