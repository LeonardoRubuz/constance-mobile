const { Dimensions } = require("react-native");


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height

const onePercentWidth = screenWidth / 100;

const SIZES = {
    font : {
        xSmall : 10,
        small : 12,
        medium : 16,
        large : 20,
        xLarge : 24,
        xxLarge : 32,
    },
    width : {
        xSmall : onePercentWidth * 5,
        small : onePercentWidth * 10,
        medium : onePercentWidth * 35,
        large : onePercentWidth * 50,
        xLarge : onePercentWidth * 75
    }
}

export {
    screenHeight,
    screenWidth,
    SIZES
}