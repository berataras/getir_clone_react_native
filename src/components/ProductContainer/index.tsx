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
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    discountPrice={item.discountPrice}
                />
            ))}
        </View>
    );
}

export default ProductContainer;
