import { View, StyleSheet, ImageBackground } from "react-native";

const backgroundImage = require('../../../assets/background/maps.png');

function AdventuresScreen(): React.JSX.Element {
    return (
        <View style={styles.box}>
            <ImageBackground source={backgroundImage} style={styles.imageBackground}>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },

    imageBackground: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
    },
});

export default AdventuresScreen;