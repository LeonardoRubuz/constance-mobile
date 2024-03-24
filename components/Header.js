import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";
import IconButton from "./Buttons/IconButton";

function Header() {
    return ( 
        <View style={styles.headerContainer}>
            <MaterialIcons 
                name="menu"
                size={30}
            />
            <Text style={{fontSize : 20}}>
                Constance
            </Text>
            <View style={styles.rightCorner}>
                <IconButton icon="search" isMaterial={true}/>
                <IconButton icon="shopping-bag" isMaterial={true} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    headerContainer : {
        backgroundColor :"#E6E9EE",
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
        width : '100%',
        height: 60,
        position : 'fixed',
        paddingLeft : 20,
        paddingRight : 20
    },
    rightCorner : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        gap: 24,
    }
})

export default Header;