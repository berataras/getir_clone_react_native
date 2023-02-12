import React from 'react';
import products from "../../../assets/data/products";
import ProductCard from "../ProductCard";
import {View} from "react-native";
import styles from "./style";

function ProductContainer() {
    return (
        <View style={styles.wrapper}>
            {products.map((item, index) => (
                <ProductCard
                    key={index}
                />
            ))}
        </View>
    );
}

export default ProductContainer;
