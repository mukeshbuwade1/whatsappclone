import { FlatList, Image, ImageBackground, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import moment from 'moment'
const Data = [
  {
    massage: 'Yes Ofcourse..',
    type: 'sender'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender'
  },
  {
    massage: 'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver'
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender'
  },
  {
    massage: 'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver'
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender'
  },
  {
    massage: 'Yes Ofcourse..',
    type: 'sender'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender'
  },
  {
    massage: 'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver'
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ?',
    type: 'sender'
  },
  {
    massage: 'Well i am not satisfied with this design plzz make design better ',
    type: 'receiver'
  },
  {
    massage: 'could you plz change the design...',
    type: 'receiver'
  },
  {
    massage: 'How are You ?',
    type: 'sender'
  },
  {
    massage: 'How Your Opinion about the one done app ? this is last message',
    type: 'sender'
  }
]

const ChattingScreen = (props) => {
  return (
    <View style={{
      flex: 1
    }}>
      {/* Chat header  */}
      <View style={{
        backgroundColor: "#128C7E",
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 5
      }}>
      
        {/* back button  */}
        <TouchableOpacity onPress={() =>props.navigation.goBack()}>
          <Image source={require("../assets/images/left-arrow.png")} style={{
            tintColor: "white",
            width: 22,
            height: 22,
            marginRight: 5
          }}

          />
        </TouchableOpacity>

        {/* user image  */}
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 30,
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
        {/* user name */}
        <Text style={{
          fontSize: 16, flex: 1,
          marginRight: 5,
          marginLeft: 5,
          color: "#fff",
          fontWeight: "600",

        }}>New User</Text>

        {/* chat options icon   */}
        <TouchableOpacity onPress={() => console.log("back")}
          style={{

          }}
        >
          <Image source={require("../assets/images/dots.png")} style={{
            tintColor: "white",
            width: 20,
            height: 20,
          }}

          />
        </TouchableOpacity>
      </View>

      {/* main chat view  */}
      <ImageBackground
        source={require("../assets/images/Background.jpg")}
        style={{
          flex: 1,
        }}
      >
        <FlatList
        showsVerticalScrollIndicator={false}
          data={Data}
          inverted
          renderItem={({ item, index }) => {
            let sender = false;
            if (item.type == "sender") sender = true
            return (
              <TouchableOpacity>
                {/* triangle shape */}
                <View style={[{
                  width: 0,
                  height: 0,
                  borderBottomWidth: 15,
                  borderBottomColor: "transparent",
                  position: "absolute",
                  top: 5
                },
                sender ? { borderRightWidth: 15, borderRightColor: "#fff", left: 0 }
                  : { borderLeftWidth: 15, borderLeftColor: "#defce9", right: 0 }]} />

                {/* main message  */}
                <View style={{
                  backgroundColor: sender ? "#fff" : "#defce9",
                  marginVertical: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  alignSelf: sender ? "flex-start" : "flex-end",
                  minWidth: 80,
                  maxWidth: "80%",
                  borderRadius: 7,
                  flexDirection: "column",
                  marginHorizontal: 7
                }} >
                  <Text>{item.massage}</Text>
                  <Text style={{
                    fontSize: 10,
                    alignSelf: "flex-end"
                  }}>{moment().format("DD/MM/YYYY hh:mm")}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => item.massage + index}
          style={{
            paddingHorizontal: 5,
            flex: 1
          }}
        />


        {/* chat input section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom:8,
            paddingHorizontal: 10,
            paddingTop:5
          }}
        >
          <TextInput
            placeholder='Message'
            style={{
              backgroundColor: '#fff',
              width: "85%",
              height: 40,
              borderRadius: 30,
              paddingHorizontal:15,
              elevation:5
            }}
          />
          <TouchableOpacity style={{
            width:40,
            height:40,
            borderRadius:40,
            backgroundColor:"#128C7E",
            justifyContent:"center",
            alignItems:"center",
            elevation:5
          }}>
            <Image source={require("../assets/images/send.png")}
              style={{
                width: 20,
                height: 20,
                tintColor:'white'
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ChattingScreen

const styles = StyleSheet.create({})