import { View, StyleSheet, Image } from "react-native";
import GoBackButton from "../../components/go-back-button/button";

const backgroundImage = require('../../../assets/background/maps.png');

function AdventuresScreen(props: any): React.JSX.Element {
    return (
        <View style={styles.box}>
            <Image source={backgroundImage} style={styles.imageBackground}></Image>
            <View style={styles.backButton}>
                <GoBackButton navigation={props.navigation}></GoBackButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },

    imageBackground: {
        height: '100%',
        position: 'absolute',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButton: {
        position: 'absolute',
        top: 10,
        left: 10
    }
});

export default AdventuresScreen;