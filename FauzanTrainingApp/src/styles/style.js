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
    },
    textLogin: {
        fontSize: 14,
        color: colors.lightGrey
    },
    registerText: {
        fontSize: 14,
        color: colors.blue
    },
    or: {
        alignSelf: 'center',
        marginTop: 230
    },
    option: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    googleButton: {
        width: '40%', 
        height: 48,
        marginLeft: 10
    },
    fingerprintButton: {
        width: '38%',
        height: 40,
        backgroundColor: colors.white,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    fingerprintText: {
        color: colors.darkGrey,
        fontWeight: 'bold',
    },
    buttonIcon: {
        paddingLeft: 15,
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
    },

    //edit
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'space-between',
        width: '86%'
    },
    headerText2: {
        alignSelf: 'center',
        fontSize: 24,
        color: colors.lightGrey,
    },
    backButton: {
        marginLeft: 20
    },
    image2: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 100,
        position: 'absolute'
    },
    inputBox2: {
        alignSelf: 'center',
        width: '80%',
        marginTop: 30
    },
    nameBox2: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    editable: {
        flex: 1,
        marginBottom: 11.5,
        height: 40,
        justifyContent: 'center'
    },
    textInput2: {
        color: colors.lightGrey,
        marginBottom: 20,
        fontSize: 16,
        width: '90%'
    },
    cameraButton: {
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 220,
        marginTop: 170
    },
    icon2: {
        color: colors.lightGrey
    },
    flipContainer: {
        marginLeft: 20,
        marginTop: 20
    },
    flipButton: {
        borderRadius: 50,
        backgroundColor: colors.lightGrey,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    round: {
        borderWidth: 1,
        height: 350,
        width: 250,
        borderColor: colors.lightGrey,
        alignSelf: 'center',
        borderRadius: 150,
        marginTop: 30
    },
    rectangle: {
        borderWidth: 1,
        height: 120,
        width: 200,
        borderColor: colors.lightGrey,
        alignSelf: 'center',
        marginTop: 100
    },
    takeContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    takeButton: {
        backgroundColor: colors.lightGrey,
        borderRadius: 50,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },

    //register
    or2: {
        alignSelf: 'center',
        marginTop: 150
    },
    tnc: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    textTnc: {
        fontSize: 14,
        color: colors.lightGrey,
        textDecorationLine: 'underline'
    },

    //verification
    otpBox: {
        width: '80%',
        alignSelf:'center',
        height: 100
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        color: colors.lightGrey,
        fontSize: 20,
      },
    
      underlineStyleHighLighted: {
        borderColor: colors.darkGrey,
      },
      instruction: {
        marginTop: 50,
        marginLeft: 20
      },

      //password
      joinBox: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
      },
      eyeIcon: {
        flex: 1,  
        marginTop: 10,
        borderColor: colors.lightGrey,
        borderBottomWidth: 1,
        height: 40,
        justifyContent: 'center'
      },
      passwordInput: {
        borderBottomWidth: 1,
        borderColor: colors.lightGrey,
        color: colors.lightGrey,
        marginTop: 10,
        marginBottom: 10,
        width: '80%'
      }
})

export default styles