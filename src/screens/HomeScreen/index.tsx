import React from 'react';
import {ScrollView, View} from "react-native";
import AddressHeader from "../../components/AddressHeader";
import Banner from "../../components/Banner";
import CategoryCard from "../../components/CategoryCard";
import categories from "../../../assets/data/categories";

import styles from "./styles";

function HomeScreen() {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor: "#f5f5f5"}}>
            <AddressHeader />
            <Banner />
            <View style={styles.productListContainer}>
                {categories.map((item => (
                    <CategoryCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        src={item.src}
                    />
                )))}
            </View>
        </ScrollView>
    );
}

export default HomeScreen;
