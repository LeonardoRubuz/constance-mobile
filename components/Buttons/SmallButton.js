import { Pressable, StyleSheet, Text } from "react-native";

function SmallButton({label}) {
    return ( 
        <Pressable style={[styles.common, styles.dark]}>
            <Text style={styles.textStyle}> {label} </Text>
        </Pressable>
     );
}

const styles = StyleSheet.create({
    common : {
        height : 40,
        width : 187,
        alignItems : 'center',
        justifyContent : "center"
    },
    light : {
        borderColor : "white",
        borderWidth : 1,
        borderStyle : 'solid' 
    },
    dark : {
        backgroundColor : "#000"
    },
    textStyle : {
        textTransform : "uppercase",
        color : "white"
    }
})


export default SmallButton;