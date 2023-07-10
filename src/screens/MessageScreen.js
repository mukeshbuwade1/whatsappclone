import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import moment from 'moment';

const listData = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Hey there, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Where are you?',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    name: 'Robert',
    avatar_url:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
    subtitle: 'Where does it come from?',
  },
  {
    name: 'downey junior',
    avatar_url:
      'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    subtitle: 'Where can I get some?',
  },
  {
    name: 'Ema Watson',
    avatar_url:
      'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
];


const HeaderSection = () => {
  return <View style={styles.headerContainer}>
    {/* top view  */}
    <View style={styles.headerRow}>
      <Text style={styles.headerTitle}>WhatsApp</Text>
      <Image source={require("../assets/images/dots.png")} style={styles.menuIcon} />
    </View>

    {/* bottom view  */}
    <View style={[styles.headerRow, { justifyContent: "space-around", marginTop: 15 }]}>
      <Text style={styles.headerText}>Chats  </Text>
      <Text style={styles.headerText}>Calls</Text>
    </View>

  </View>
}

const renderItems = ({ item, index },navigation) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => {  navigation.navigate("ChattingScreen")
    }}
      style={styles.listView}
    >
      {/* left view  */}
      <TouchableOpacity activeOpacity={1} >
        <Image
          source={{ uri: item.avatar_url }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 30,
          }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>

      {/* middle view  */}
      <View style={styles.listContentView}>
        <Text numberOfLines={1} style={styles.nameText}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.messageText}>
          {item.subtitle}
        </Text>
      </View>

      {/* right view  */}
      <View style={{
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: "flex-end"
      }}>
        <View style={{
          minWidth: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: "#128C7E",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            color: 'white',
            fontSize: 10,
            fontWeight: "600"
          }}>10</Text>
        </View>
        <Text style={{
          fontSize: 10
        }}>{moment().format(index < 2 ? "hh:mm" : "DD/MM/YYYY")}</Text>
      </View>

    </TouchableOpacity>
  )
}

const MessageScreen = ({navigation}) => {
  return (
    <View style={{
      flex: 1
    }}>
      {/* header  */}
      <HeaderSection />

      {/* user list  */}
      <FlatList
        data={listData}
        renderItem={({ item, index })=>renderItems({ item, index },navigation)}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          //  flex: 1, backgroundColor: "#000", padding: 10 
        }}
      />

    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#128C7E",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: '#fff'
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff"
  },
  menuIcon: {
    tintColor: "white",
    width: 20,
    height: 20,
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    // width: "100%"
  },
  listContentView: {
    flex: 1,
    paddingHorizontal: 10
  },
  nameText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000"
  },
  messageText: {
    fontSize: 14,

  }

})