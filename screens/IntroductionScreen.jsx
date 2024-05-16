import { View, Text } from "react-native";
import screenStyles from "../styles/screens.style";
import MediumButton from "../components/buttons/mediumButton";
import { SIZES } from "../constants";
import MediumTitle from "../components/texts/MediumTitle";

function IntroductionScreen() {
    return ( 
        <View style={[screenStyles.introScreen]}>
            <View style={{borderWidth : 4, width : SIZES.width.xLarge}}>
                
            </View>
            <View style={{gap:SIZES.font.medium, width:"100%", alignItems:"center"}}>
                <View>
                    <MediumTitle text="Bienvenue chez Constance" />
                </View>
                <View style={{width:SIZES.width.large, alignItems:"center"}}>
                    <Text style={{textAlign:"justify"}}>Lorem ipsum sit dolor  </Text>
                </View>
            </View>
            <MediumButton text="Continuer" />
        </View>
     );
}


export default IntroductionScreen;