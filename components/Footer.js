import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "./Buttons/IconButton";

function Footer() {
    return ( 
        <View style={styles.footer}>
            <View style={styles.socialIcons}>
                <IconButton isMaterial={false} imageSource={require('../assets/images/Instagram.png')} />
            </View>
            <Image source={require('../assets/images/line-separator.png')}/>
            <Text style={styles.contact}>
                +243 980 030 613 | +33 7 49 16 57 32
            </Text>
            <Image source={require('../assets/images/line-separator.png')}/>
            <View style={styles.links}>
                <Text>A propos</Text>
                <Text>Contact</Text>
            </View>
            <View style={styles.copyright}>
                <Text>Copyright  Amsterdam  Tous droits réservés</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    footer : {
        height : 340,
        justifyContent : 'space-between',
        alignItems : 'center' 
    },
    socialIcons : {
        flexDirection : 'row',
        gap : 20,
        marginTop : 10
    },
    contact : {},
    links : {
        flexDirection : 'row',
        gap : 20,
    },
    copyright : {
        backgroundColor : '#E6E9EE',
        height : 45.25,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
})

export default Footer;