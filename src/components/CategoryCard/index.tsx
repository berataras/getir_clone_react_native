import React from 'react'
import {TouchableOpacity,Image, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {ICategory} from "../../models";
import {categoryScreenProp} from "../../types/screen";

import styles from "./style";

function CategoryCard({id, name, src, subCategories}: ICategory) {


    const navigation = useNavigation<categoryScreenProp>();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Category", {category: {id: id, name: name}})}
            testID="category-item"
            style={styles.categoryCard}>
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
