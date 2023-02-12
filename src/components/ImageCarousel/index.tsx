import React, {useState} from 'react';
import {FlatList, Image, Text, Dimensions, View} from "react-native";
import styles from "./style"

const {width, height} = Dimensions.get("window");
function ImageCarousel({images}: {images: string[]}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const onViewRef = React.useRef(( viewableItems: any ) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0);
        }
    });

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={images}
                style={styles.carousel}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.5}
                snapToAlignment="center"
                decelerationRate="fast"
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50
                }}
                onViewableItemsChanged={onViewRef.current}
                renderItem={item => (
                    <Image
                        style={styles.image}
                        source={{uri: item.item}}
                    />
                )}
            />
            <View style={styles.dots}>
                {images.map((image,index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === activeIndex ? styles.activeDot : styles.noActiveDot
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

export default ImageCarousel;
