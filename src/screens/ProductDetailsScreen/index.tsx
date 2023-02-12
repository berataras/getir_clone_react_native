import React from 'react';
import {ScrollView, Text, View} from "react-native";
import ImageCarousel from "../../components/ImageCarousel";
import AddToCardButton from "../../components/AddToCardButton";

function ProductDetailsScreen(props: any) {
    const product = props.route.params.product;
    console.log(product)
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <ImageCarousel images={product?.images} />
                <View style={{width:'100%',alignItems:'center',backgroundColor:'white'}}>
                    <Text
                        style={{
                            color: "#5D3EBD",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginTop:12
                        }}
                    >
                        <Text>{"\u20BA"}</Text>{product.price}
                    </Text>
                    <Text style={{fontWeight:'700',fontSize:16,marginTop:12}}>
                        {product.name}
                    </Text>
                    <Text style={{color:'#848897',fontWeight:'600',marginTop:8,paddingBottom:18}}>
                        {product.amount}
                    </Text>
                </View>
            </ScrollView>
            <AddToCardButton />
        </View>
    );
}

export default ProductDetailsScreen;
