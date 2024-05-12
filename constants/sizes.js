const { Dimensions } = require("react-native");


const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height


const SIZES = {
    xSmall : 10,
    small : 12,
    medium : 16,
    large : 20,
    xLarge : 24,
    xxLarge : 32,
}

export {
    screenHeight,
    screenWidth,
    SIZES
}