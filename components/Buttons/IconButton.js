import { Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";

function IconButton({icon, isMaterial, imageSource}) {
    return ( 
        <Pressable>
            {isMaterial ? 
                <MaterialIcons 
                    name={icon}
                    size={30} />
                :
                <Image source={imageSource} />
            }
        </Pressable>
     );
}

export default IconButton;