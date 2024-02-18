import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

const image = require('../../../assets/background/home.png');

function HomeScreen(props: any): React.JSX.Element {
    return (
        <View style={styles.box}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => props.navigation.push('Heroes')}
                >
                    <Text style={styles.text}>Heróis</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    onPress={() => props.navigation.push('Adventures')}
                >
                    <Text style={styles.text}>Aventuras</Text>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },

    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
        fontSize: 25
    },

    button: {
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20
    }
});

export default HomeScreen;