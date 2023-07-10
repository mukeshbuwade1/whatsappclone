import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SmsRetriever from 'react-native-sms-retriever';
import auth from '@react-native-firebase/auth';

// get device dimension 
const { width, height } = Dimensions.get("window")

// main component 
const Login = (props) => {
    const [number, setNumber] = useState("")

    // Get the phone number
    const _getPhoneNumber = async () => {
        try {
            const phoneNumber = await SmsRetriever.requestPhoneNumber();
            if (phoneNumber) {
                if (phoneNumber.length == 10) {
                    setNumber(phoneNumber)
                } else if (phoneNumber.length > 10) {
                    setNumber(phoneNumber.slice(-10))

                }
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    };

    useEffect(() => {
        // _getPhoneNumber()
    }, [])

    // signInWithPhoneNumber 
    async function signInWithPhoneNumber() {
        try {
            console.log("signInWithPhoneNumber")
            const confirmation = await auth().signInWithPhoneNumber("+91 9713488633");
            if (confirmation) {
                props.navigation.navigate("OTPScreen")
            } else {
                alert('Something went  wrong')
            }
        } catch (error) {
            console.log("error", error)
        }

    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.heading}>Verify your Number</Text>
                <Text style={styles.infoText}>whatsapp will send an SMS message to verify your phone number, enter your phone number</Text>
                <View style={styles.inputBox}>
                    <Text style={[styles.countryCode, styles.tx]}>+91</Text>
                    <TextInput
                        placeholder='Phone number'
                        style={[styles.textInput, styles.tx]}
                        keyboardType={"phone-pad"}
                        maxLength={10}
                        value={number}
                        onChangeText={(t) => setNumber(t)}
                    />
                </View>

                <TouchableOpacity style={{
                    marginVertical: 15,
                    borderWidth: 1, borderColor: '#ddd', borderRadius: 4,
                    padding: 10,
                    backgroundColor: "#128C7E",
                    position: "absolute",
                    bottom: 50,
                }}
                    onPress={signInWithPhoneNumber}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 15,
                        color: "#fff",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        paddingHorizontal: 20

                    }}>Next</Text>
                </TouchableOpacity>
                <Text style={{
                    position: "absolute",
                    bottom: 30,
                }}>Carrier SMS charges may apply</Text>


            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    infoText: {
        width: "90%",
        textAlign: "center",
    },
    inputBox: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "80%",
        marginTop: 20,
    },
    countryCode: {
        width: "25%",
        borderBottomColor: "#128C7E",
        borderBottomWidth: 2,
        lineHeight: 45,
        textAlign: "center",
    },
    textInput: {
        width: "70%",
        borderBottomColor: "#128C7E",
        borderBottomWidth: 2,
        height: 50,
        paddingHorizontal: 17,
        //    textAlign:"center"
    },
    tx: {
        fontSize: 17,
        fontWeight: "600",
        color: "#128C7E",
        letterSpacing: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: "600",
        color: "#128C7E",
        marginVertical: 20
    }
})