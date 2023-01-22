import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";

function AddressHeader() {
    return (
        <View style={styles.addressHeader}>
            <View style={styles.address}>
                <Image style={styles.addressIcon} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
                <Text style={styles.addressTypeText}>Ev </Text>
                <Text style={styles.addressText}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                <Entypo name="chevron-small-right" size={24} color="#5D3EBD" />
            </View>

            <View style={styles.deliveryTime}>
                <Text style={styles.deliveryTimeText}>
                    13dk
                </Text>
            </View>
        </View>
    );
}

export default AddressHeader;
