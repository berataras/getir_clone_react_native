import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import styles from "./style";
import categories from "../../../assets/data/categories";
import {ICategory} from "../../models";

function CategoryTabFilter({category}: {category: ICategory}) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}
            style={styles.wrapper}
        >
            {categories.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.categoryItem,
                        item.id === category.id && styles.categoryItemActive
                    ]}
                >
                    <Text style={styles.categoryItemText}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default CategoryTabFilter;
