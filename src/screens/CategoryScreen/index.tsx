import React from 'react';
import {ScrollView, Text, View} from "react-native";
import CategoryTabFilter from "../../components/CategoryTabFilter";
import CategoryChipFilter from "../../components/CategoryChipFilter";
import ProductContainer from "../../components/ProductContainer";

function CategoryScreen(props: any) {
    const category = props.route.params.category;
    return (
        <ScrollView
            stickyHeaderIndices={[1]}
            style={{height:'100%',backgroundColor:'#f5f5f5'}}
        >
            <CategoryTabFilter category={category} />
            <CategoryChipFilter />
            <ProductContainer />
        </ScrollView>
    );
}

export default CategoryScreen;
