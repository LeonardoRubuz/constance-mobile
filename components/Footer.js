import { StyleSheet, Text, View } from "react-native";
import IconButton from "./Buttons/IconButton";

function Footer() {
    return ( 
        <View style={styles.footer}>
            <View style={styles.socialIcons}>
                <Text>Instagram</Text>
                <Text>WhatsApp</Text>
                <Text>TikTok</Text>
            </View>
            <Text style={styles.contact}>
                +243 980 030 613 | +33 7 49 16 57 32
            </Text>
            <View style={styles.links}>
                <Text>A propos</Text>
                <Text>Contact</Text>
            </View>
            <View style={styles.copyright}>
                <Text>Copyright Amsterdam All right reserved</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    footer : {
        height : 340,
        borderWidth : 4,
        borderStyle : 'solid',
        justifyContent : 'space-between',
        alignItems : 'center' 
    },
    socialIcons : {
        flexDirection : 'row',
        gap : 20
    },
    contact : {},
    links : {
        flexDirection : 'row',
        gap : 20
    },
    copyright : {
        backgroundColor : '#f00',
        height : 45.25,
        width : '100%'
    },
})

export default Footer;