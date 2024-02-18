import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const chevronLeft = require("../../../assets/icons/chevron-left.png");

function GoBackButton(props: any): React.JSX.Element {

    return (
        <TouchableOpacity
            style={styles.box}
            onPress={() => props.navigation.pop()}
        >
            <Image source={chevronLeft} style={styles.image}></Image>
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5
    },

    image: {
        width: 40,
        height: 40
    },

    text: {
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
        fontSize: 20
    },
});

export default GoBackButton;