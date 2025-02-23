import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import Calender from "../../components/Booking/calender"
import Form from '../../components/Booking/form';
export default function booking() {
  const navigation = useNavigation();
    const navigateOnPress = () => {
      navigation.navigate("home");
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="leftcircleo"
          size={30}
          color="black"
          onPress={navigateOnPress}
        />
        <Text style={styles.text}>Schedule</Text>
        <View></View>
      </View>
      <Calender/>
      <View style={styles.details}>
        <Text style={styles.text}>Details</Text>
        <Form/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  details:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:10,
    justifyContent:"center",
    padding:5,
    marginTop:10,
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
  },
  header: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    gap: 100,
    alignItems: "center",
    margin: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
    color: "#1B1E28"
  },
  
});
