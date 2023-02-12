import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./style";

function AddToCardButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Sepete Ekle
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddToCardButton;
