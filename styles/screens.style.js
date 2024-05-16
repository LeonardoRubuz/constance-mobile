import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const screenStyles = StyleSheet.create({
    introScreen : {
        flex : 1,
        alignItems : "center",
        justifyContent : "space-around",
        marginVertical : SIZES.font.xxLarge,
        marginHorizontal : SIZES.font.xxLarge
    },
    screen : {
        flex: 1,
        marginVertical : SIZES.xLarge
    },
    container : {
        padding : SIZES.font.xLarge
    }
})

export default screenStyles