import { View, Text } from "react-native";
import screenStyles from "../styles/screens.style";
import MediumButton from "../components/buttons/mediumButton";
import { SIZES } from "../constants";

function IntroductionScreen() {
    return ( 
        <View style={[screenStyles.introScreen]}>
            <View style={{borderWidth : 4, width : SIZES.width.xLarge}}>
                
            </View>
            <View>
                <Text>Bienvenue chez Constance</Text>
                <Text>Lorem ipsum sit dolor amet </Text>
            </View>
            <MediumButton text="Continuer" />
        </View>
     );
}


export default IntroductionScreen;