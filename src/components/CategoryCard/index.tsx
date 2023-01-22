import React from 'react'
import {TouchableOpacity,Image, Text} from "react-native";

import {ICategory} from "../../models";

import styles from "./style";

function CategoryCard({id, name, src, subCategories}: ICategory) {
    return (
        <TouchableOpacity testID="category-item" style={styles.categoryCard}>
            <Image
                style={styles.categoryCardImage}
                source={{uri: src}}
            />
            <Text style={styles.categoryCardText}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;
