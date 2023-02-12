import React from 'react';
import {ScrollView, Text} from "react-native";
import CategoryTabFilter from "../../components/CategoryTabFilter";
import CategoryChipFilter from "../../components/CategoryChipFilter";

function CategoryScreen(props: any) {
    const category = props.route.params.category;
    return (
        <ScrollView>
            <CategoryTabFilter category={category} />
            <CategoryChipFilter />
        </ScrollView>
    );
}

export default CategoryScreen;
