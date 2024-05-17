import { Text } from "react-native";
import { SIZES } from "../../constants";

function SmallTitle({text}) {
    return ( 
        <Text style={{fontSize:SIZES.font.medium, fontWeight:700}}>
            {text}
        </Text>
     );
}

export default SmallTitle;