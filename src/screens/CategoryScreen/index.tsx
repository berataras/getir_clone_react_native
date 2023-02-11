import React from 'react';
import {ScrollView, Text} from "react-native";
import CategoryTabFilter from "../../components/CategoryTabFilter";

function CategoryScreen(props: any) {
    const category = props.route.params.category;
    return (
        <ScrollView>
            <CategoryTabFilter category={category} />
        </ScrollView>
    );
}

export default CategoryScreen;
