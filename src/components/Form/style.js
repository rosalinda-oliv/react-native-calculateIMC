import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#ffffff", 
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
    },
    form: {
        width:"100%",
    },
    formLabel: {
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
        paddingTop:5,
    },
    input: {
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#B56576",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:10,
    },
    textButtonCalculator: {
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage: {
        fontSize:10,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
        marginTop:-10
    },
    exhibitionResultImc: {
        width: "100%",
        height:"50%",
    }
});

export default styles;