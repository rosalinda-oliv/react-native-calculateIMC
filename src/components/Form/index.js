import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultImc from "./ResultImc/index.js";

export default function Form() {

    const [height, setHeight] = useState (null);
    const [weight, setWeight] = useState (null);
    const [messageImc, setMessageImc] = useState ("Set weight and height");
    const [imc, setImc] = useState (null);
    const [textButton, setTextButton] = useState ("Calculate");

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Your imc is equal: ")
            setTextButton("Calculate again...")
            return
        }
        setImc(null)
        setTextButton("Calculate")
        setMessageImc("Set weight and height")
    }

    return(
        <View>

            <View>
                <Text> Height </Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text> Weight </Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                />
                <Button 
                onPress={() => validationImc()}
                title={textButton}
                />
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}