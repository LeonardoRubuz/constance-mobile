import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const style = StyleSheet.create({
    smallPrimary : {
        width : SIZES.width.small,
        aspectRatio : 10 / 1,
        backgroundColor : COLORS.primary
    },
    smallSecondary : {
        width : SIZES.width.small,
        backgroundColor : COLORS.lightWhite
    },
    mediumPrimary : {
        width : SIZES.width.medium,
        aspectRatio : 10 / 3,
        backgroundColor : COLORS.primary,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 15
    },
    mediumSecondary : {
        width : SIZES.width.medium,
        backgroundColor : COLORS.lightWhite
    },
    largePrimary : {
        width : SIZES.width.large,
        backgroundColor : COLORS.primary
    },
    largeSecondary : {
        width : SIZES.width.large,
        backgroundColor : COLORS.lightWhite
    },
    buttonTextPrimary : {
        color : COLORS.black,
        fontSize : SIZES.font.medium
    },
    buttonTextSecondary : {
        color : COLORS.lightDark,
        fontSize : SIZES.font.medium
    },

})

