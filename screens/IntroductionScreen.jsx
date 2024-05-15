import { View, Text } from "react-native";
import screenStyles from "../styles/screens.style";

function IntroductionScreen() {
    return ( 
        <View style={[screenStyles.container]}>
            <Text>Introduction</Text>
        </View>
     );
}

export default IntroductionScreen;