import { View, StyleSheet, Image } from "react-native";
import GoBackButton from "../../components/go-back-button/button";
import DataComponent from "../components/data";

export interface IHero {
    img: string;
    color: string;
    name: string;
    title: string;
    strength: number;
    health: number;
    shield: number;
    agility: number;
    magicPower: number;
    range: number;
    stamina: number;
};

const backgroundImage = require('../../../assets/background/heroes.png');

const heroes: IHero[] = [
    {
        img: "",
        color: "#DAD8CB",
        name: "Sir ALdric",
        title: "o cavalheiro errante",
        strength: 90,
        health: 70,
        shield: 100,
        agility: 70,
        magicPower: 20,
        range: 20,
        stamina: 100
    },
    {
        img: "",
        color: "#6A8462",
        name: "Kallarix",
        title: "o lagarto das Sombras",
        strength: 30,
        health: 50,
        shield: 45,
        agility: 100,
        magicPower: 70,
        range: 30,
        stamina: 50
    },
]

function HeroesScreen(props: any): React.JSX.Element {
    return (
        <View style={styles.box}>
            <Image source={backgroundImage} style={styles.imageBackground}></Image>
            <View style={styles.backButton}>
                <GoBackButton navigation={props.navigation}></GoBackButton>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <DataComponent heroData={heroes[0]}></DataComponent>
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

export default HeroesScreen;