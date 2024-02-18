import React from 'react';
import { View, StyleSheet, Image } from "react-native";

export const ITEM_WIDTH = 280;

const CarouselItemComponent = (props: any) => {
    const item = props.item;
    const index = props.index;
    const selected: boolean = item.selected;

    return (
        <View style={[styles.container, { shadowColor: item.color }]} key={index}>
            <Image
                source={selected ? item.defaultImg : item.blackImg}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        elevation: 70
    },

    image: {
        objectFit: 'contain',
        width: ITEM_WIDTH,
    }
})

export default CarouselItemComponent;