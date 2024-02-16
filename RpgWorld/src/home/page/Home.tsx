import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

import RadialGradient from 'react-native-radial-gradient';

const image = require('../../../assets/background/home.png');

function Home(): React.JSX.Element {
    return (
        <View style={styles.box}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <TouchableHighlight style={styles.button}>
                    <RadialGradient
                        style={styles.gradient}
                        colors={['white', '#ffffffab', '#ffffff00']}
                        stops={[0, 0.1, 1]}
                        center={[150, 30]}
                        radius={150}>
                        <Text style={styles.text}>Iniciar aventura</Text>
                    </RadialGradient>
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
        borderColor: 'black',
        borderWidth: 2
    },

    gradient: {
        width: 300, 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default Home;