import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext } from "react";
import UseContext from "../../context/LocationContext";
export default function Search() {
  const {location} = useContext(UseContext);
  const navigation = useNavigation();
  const navigateOnPress = () => {
    navigation.navigate("home");
  };

// take input text, voice or image 
// send to feature-extraction backend
// 
  const fetch = async()=>{
    const url = `https://serpapi.com/search.json?engine=google_hotels&q=${location}&check_in_date=2025-02-23&check_out_date=2025-02-24&adults=2&currency=USD&gl=us&hl=en&api_key=010a3402db41cbf63222d4a2432478ec9c3cabcfbb714de65f34c2fc55971cdf&amenities=pool,spa,free_wifi`
    const data = await fetch(url);
    const response = await data.json();
    const tempDataofHotels = response.properties;
    console.log(tempDataofHotels);
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
        <Text style={styles.text}>Search Hotel</Text>
        <View></View>
      </View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={30} color="grey" style={styles.searchIcon} />
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Search.." style={styles.searchInput} />
        </View>
        <Feather name="mic" size={24} color="blue" style={styles.micIcon} />
        <MaterialCommunityIcons name="google-lens" size={24} color="blue" style={styles.imgIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    gap: 90,
    alignItems: "center",
    margin: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B1E28",
    padding: 4,
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  inputWrapper: {
    marginTop: 20,
    width: 370,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (bottom shadow)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow
  },
  searchInput: {
    color: "#1B1E28",
    paddingLeft: 50,
    width: "100%",
    height: "100%",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    position: "absolute",
    left: 35,
    zIndex: 1,
    top: 34,
  },
  micIcon: {
    position: "absolute",
    right: 70,
    top: 35,
  },
  imgIcon: {
    position: "absolute",
    right: 35,
    top: 35,
  },
});