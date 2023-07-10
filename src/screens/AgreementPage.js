import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("window")
const AgreementPage = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 20,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <StatusBar backgroundColor={"#128C7E"} barStyle={"dark-content"} translucent={false} />
            <Text style={{
                textAlign: "center",
                fontSize: 19,
                color: "#128C7E",
                fontWeight: "700",

            }}>Welcome to WhatsApp</Text>
            <Image source={require("../assets/images/t_and_c_cover.png")} style={{
                width: width * 0.8, height: width * 0.8
            }} />

            <View >
                <Text style={{
                    fontSize: 13,
                    // fontWeight:"500",
                    textAlign: "center"
                }}>
                    Read our
                    <Text style={{ color: "#128C7E" }} onPress={() => { }}> Privacy Policy.</Text>
                    Tap "Agree and continue" to accept the
                    <Text style={{ color: "#128C7E" }}> Terms of Service</Text>
                </Text>
                <TouchableOpacity style={{
                    marginVertical: 15,
                    borderWidth: 1, borderColor: '#ddd', borderRadius: 4,
                    padding: 10,
                    backgroundColor: "#128C7E",
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 15,
                        color: "#fff",
                        fontWeight: "600",
                        textTransform: "uppercase"

                    }}
                    onPress={()=>props.navigation.navigate("Login")}
                    >Agree and continue</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AgreementPage

const styles = StyleSheet.create({})