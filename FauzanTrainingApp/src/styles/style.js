import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
    //general
    container: {
        flex: 1,
        backgroundColor: colors.lightBlack
    },
    scrollContainer: {
        flexGrow: 1
    },
    textLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.lightGrey
    },

    //splash screen
    quotesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quotes: {
        fontSize: 14,
        color: colors.lightGrey
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    //intro
    textLogoContainer: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider: {
        flex: 1
    },
    btnContainer: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    btnLogin: {
        height: 35,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGrey,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    btnTextLogin: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.lightBlack
    },
    btnRegister: {
        height: 35,
        width: '90%',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.lightGrey,
        backgroundColor: 'transparent',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    btnTextRegister: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.lightGrey
    },
    listContainer: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    listContent: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgList: {
        width: 330,
        height: 330
    },
    textList: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.lightGrey
    },
    activeDotStyle: {
        width: 20,
        backgroundColor: colors.lightGrey
    },

    //login
    headerText: {
        alignSelf: 'center',
        fontSize: 24,
        color: colors.lightGrey,
        paddingTop: 30
    },
    inputBox: {
        alignSelf: 'center',
        width: '90%',
        marginTop: 100
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        color: colors.lightGrey,
        marginTop: 10,
        marginBottom: 10
    },
    btnLogin2: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGrey,
        marginTop: 40,
        marginBottom: 20,
        borderRadius: 5
    },
    registerBox: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    register: {
        height: 20,
        width: 50
    },
    textLogin: {
        fontSize: 14,
        color: colors.lightGrey
    },
    registerText: {
        fontSize: 14,
        color: colors.blue
    },

    //profile
    body: {
        marginTop: 50
    },
    topBox: {
        marginBottom: 5
    },
    nameBox: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 2,
        backgroundColor: colors.darkGrey
    },
    image: {
        height: 60,
        width: 60,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.lightGrey
    },
    menuBox: {
        height: 80,
        marginBottom: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.darkGrey
    },
    text:{
        fontSize: 18,
        color: colors.lightGrey
    },
    box1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:
    {
        marginRight: 20,
        marginLeft: 20,
        color: colors.lightGrey
    }
})

export default styles