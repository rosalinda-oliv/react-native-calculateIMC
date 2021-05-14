import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import styles from "./style.js"
import ResultImc from "./ResultImc/index.js";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Set weight and height");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calculate");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2));
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}]);
        setImc(totalImc);
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Obligatory field*")
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Your imc is equal: ")
            setTextButton("Calculate again...")
            setErrorMessage(null)
        } else {
            verificationImc();
            setImc(null)
            setTextButton("Calculate")
            setMessageImc("Set weight and height")
        }
    }

    return (


        <View style={styles.formContext}>
            {imc == null ?

            <Pressable onPress={Keyboard.dismiss} style={styles.form}>

                <Text style={styles.formLabel}> Height </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <Text style={styles.formLabel}> Weight </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </Pressable>
            : 
            <View style={styles.exhibitionResultImc}>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {
                validationImc()
            }}
            >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            }
            <FlatList
            style={styles.ListImcs}
            data={imcList.reverse()}
            renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}> Resultado IMC: </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id;
            }}
            />
        </View>
    );
}