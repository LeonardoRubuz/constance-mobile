import { Text } from "react-native";
import { SIZES } from "../../constants";

function MediumTitle({text}) {
    return ( 
        <Text style={{fontSize:SIZES.font.large, fontWeight:700}}>
            {text}
        </Text>
     );
}

export default MediumTitle;