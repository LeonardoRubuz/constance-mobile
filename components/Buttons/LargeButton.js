import { Pressable, StyleSheet, Text } from "react-native";

function LargeButton({label, theme}) {
    if (theme==='dark') {
        return ( 
            <Pressable style={[styles.common, styles.dark]}>
                <Text style={[styles.textStyle, {color : "white"}]}> {label} </Text>
            </Pressable>
         );
    }
        return ( 
            <Pressable style={[styles.common, styles.light]}>
                <Text style={[styles.textStyle, {color : 'black'}]}> {label} </Text>
            </Pressable>
         );
}

const styles = StyleSheet.create({
    common : {
        height : 56,
        width : 375,
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
    }
})


export default LargeButton;