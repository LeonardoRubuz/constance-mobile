import { Text } from "react-native";
import { SIZES } from "../../constants";

function LargeTitle({text}) {
    return ( 
        <Text style={{fontSize:SIZES.font.xLarge, fontWeight:700}}>
            {text}
        </Text>
     );
}

export default LargeTitle;