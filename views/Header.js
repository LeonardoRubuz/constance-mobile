import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";

function Header() {
    return ( 
        <View style={styles.headerContainer}>
            <MaterialIcons 
                name="menu"
                size={30}
            />
            <Text>Constance</Text>
            <View>
                <MaterialIcons name="search" size={30} />
                <MaterialIcons name="shopping-bag" size={30}/>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    headerContainer : {
        backgroundColor :"red",
        flexDirection : 'row',
        justifyContent: 'space-between',
        width : '100%',
    }
})

export default Header;