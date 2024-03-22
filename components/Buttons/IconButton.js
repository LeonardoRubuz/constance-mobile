import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";

function IconButton({icon}) {
    return ( 
        <Pressable>
            <MaterialIcons 
                name={icon}
                size={30} />
        </Pressable>
     );
}

export default IconButton;