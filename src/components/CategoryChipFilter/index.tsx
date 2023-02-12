import React, {useState} from 'react';
import {TouchableOpacity, Text, ScrollView} from "react-native";
import styles from "./style";

function CategoryChipFilter() {
    const [activeData, setActiveData] = useState("Birlikte İyi Gider");
    const data = [
        {name: "Birlikte İyi Gider"},
        {name: "Çubuk"},
        {name: "Kutu"},
        {name: "Külah"},
        {name: "Çoklu"},
        {name: "Cips"},
        {name: "Dondurma"},
    ]
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}
            style={styles.wrapper}
        >
            {data.map((item, index) => (
                <TouchableOpacity
                    style={styles.chip}
                    key={index}
                    onPress={() => setActiveData(item.name)}
                >
                    <Text style={[styles.chipText, item.name === activeData && styles.activeChip]}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

export default CategoryChipFilter;
