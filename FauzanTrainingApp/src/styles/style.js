import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlack
    },
    textLogoContainer: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.lightGrey
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
        backgroundColor: colors.lightGrey
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
        backgroundColor: 'transparent'
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
    }
})

export default styles