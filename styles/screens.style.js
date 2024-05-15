import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const screenStyles = StyleSheet.create({
    screen : {
        flex: 1,
        marginVertical : SIZES.xLarge
    },
    container : {
        padding : SIZES.large
    }
})

export default screenStyles