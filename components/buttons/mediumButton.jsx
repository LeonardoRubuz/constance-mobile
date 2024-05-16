import { Pressable, Text } from "react-native";
import { style } from "./buttons.style";


function MediumButton({text}) {
    return ( 
        <Pressable style={style.mediumPrimary}>
            <Text style={style.buttonTextPrimary}>
                {text}
            </Text>
        </Pressable>
     );
}

export default MediumButton;