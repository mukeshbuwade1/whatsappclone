import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
    getHash,
    removeListener,
    startOtpListener,
    useOtpVerify,
} from 'react-native-otp-verify';
import auth from '@react-native-firebase/auth';
import SmsRetriever from 'react-native-sms-retriever';
import { CommonActions } from '@react-navigation/native';

const OTPScreen = (props) => {
    const { number, setScreenName } = props;
    const [code, setCode] = useState("");
    const myAlert = () => {
        Alert.alert("Info", "Screen or Function is under Construction")
    }

    useEffect(() => {
        // getHash().then(hash => {
        //     console.log("hash", hash)
        //     // use this hash in the message.
        // }).catch(console.log);

        // startOtpListener((message) => {
        //     // extract the otp using regex e.g. the below regex extracts 6 digit otp from message
        //     const otp = /(\d{6})/g.exec(message)?.[1];
        //     // const regex = /(\d{6})/g;
        //     // const match = regex.exec(message)||"";
        //     // const otp = match[1];
        //     if (otp) setCode("" + otp);
        // });
        // return () => removeListener();
        // _onSmsListenerPressed
    }, []);


    //************************************************************* */

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);



    // Handle login
    function onAuthStateChanged(user) {
        console.log("onAuthStateChanged", "onAuthStateChanged")
        if (user) {
            console.log("firstuser", user)
            // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
            // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
            // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
            // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    // Get the SMS message / verification code (OTP - One-Time-Passcode)
    const _onSmsListenerPressed = async () => {
        console.log("_onSmsListenerPressed...............")
        try {
            const registered = await SmsRetriever.startSmsRetriever();
            if (registered) {
                SmsRetriever.addSmsListener(event => {
                    console.log("event.message.....", event.message);
                    SmsRetriever.removeSmsListener();
                });
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    };



    async function confirmCode() {
        console.log("code",code)
        props.navigation.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{name:"MessageScreen"}]
            })
        )

        // try {
        //     await confirm.confirm(code);
        // } catch (error) {
        //     console.log('Invalid code.');
        // }
    }
    //******************************************************** */

    return (
        <View style={{
            alignItems: "center", flex: 1
        }}>

            {/* heading and subheading */}
            <Text style={styles.heading}>Verify {number ?? "+91XXXXXXXXXX"}</Text>
            <Text style={{ textAlign: "center" }}>Waiting to automatically detect an SMS sent to
                <Text style={{ fontWeight: "500" }}>{number ?? "+91XXXXXXXXXX"}.</Text>
                <Text style={{ fontWeight: "700", color: "#128C7E" }}> Wrong Number</Text>
            </Text>

            {/* otp input field  */}
            <OTPInputView
                style={{ width: '80%', height: 100, }}
                pinCount={6}
                code={code}
                onCodeChanged={code => { setCode(code) }}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                    //verifyOTPFunction()
                })}
                placeholderCharacter={"0"}
                placeholderTextColor={"#ccc"}
            />

            <Text
                onPress={myAlert}
                style={{
                    fontWeight: "700",
                    fontSize: 14,
                    color: "#128C7E",
                    marginTop: 10
                }}>Resend OTP</Text>

            <TouchableOpacity style={styles.btn}
                onPress={confirmCode}
            >
                <Text style={styles.btn_tx}>Verify OTP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: "600",
        color: "#128C7E",
        marginTop: 30,
        marginBottom: 20

    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#128C7E",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: "#128C7E",
        fontSize: 20,
        fontWeight: "700"
    },

    underlineStyleHighLighted: {
        borderColor: "#128C7E",
    },
    btn: {
        width: "80%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1, borderColor: '#ddd', borderRadius: 4,
        padding: 10,
        backgroundColor: "#128C7E",
        position: "absolute",
        bottom: 20,

    },
    btn_tx: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 15,
        color: "#fff",
        letterSpacing: 1,
    },
});