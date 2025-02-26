import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Feather from "@expo/vector-icons/Feather";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';
import { useUser } from '@clerk/clerk-react';
import Slider from '../../components/Home/slider';
import { useState } from 'react';
import { useContext } from 'react';
import UseContext from '../../context/LocationContext';

export default function Home() {
  const { user } = useUser();
  const [search, setSearch] = useContext(UseContext);
  const [hotel, setHotel] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const fetchApi = async () => {
    const url = `https://serpapi.com/search.json?engine=google_hotels&q=${search}&check_in_date=2025-02-23&check_out_date=2025-02-24&adults=2&currency=USD&gl=us&hl=en&api_key=010a3402db41cbf63222d4a2432478ec9c3cabcfbb714de65f34c2fc55971cdf`;
    const data = await fetch(url);
    const response = await data.json();
    const tempDataofHotels = response.properties;
    const hotels = tempDataofHotels.filter((hot) => {
      return hot.type === "hotel";
    });
    setHotel(hotels);
  };

  const handleSubmit = () => {
    console.log(search);
    fetchApi();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
          />
          <Text style={styles.profileName}>{user?.fullName}</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              placeholder='Search..'
              value={search}
              onChangeText={handleChange}
              onSubmitEditing={handleSubmit}
              style={styles.searchInput}
            />
            <Feather name="search" size={30} color="grey" style={styles.searchIcon} />
            <Entypo name="location-pin" size={30} color="red" style={styles.locationIcon} />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.exploreRow}>
          <Text style={styles.exploreText}>Explore</Text>
          <Text style={styles.exploreTextBold}>Best Hotels</Text>
        </View>
        <View style={styles.exploreRow}>
          <Text style={styles.exploreText}>in</Text>
          <Text style={styles.exploreLocation}>{search}</Text>
        </View>
      </View>
      <View style={styles.bestHotelsRow}>
        <Text style={styles.bestHotelsText}>Best Hotels</Text>
        <Link href="/search" style={styles.viewAllLink}>View All</Link>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {hotel.map((hotelItem, index) => (
          <Slider key={index} hotel={hotelItem} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text>Made by Sandy &copy; 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  header: {
    height: 200,
    backgroundColor: '#ff6f00',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  profileImage: {
    height: 60,
    backgroundColor: '#ffffff',
    width: 60,
    borderRadius: 60,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  searchInputWrapper: {
    width: '100%',
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    paddingLeft: 50,
    backgroundColor: "white",
    borderRadius: 50,
    width: '100%',
    height: 50,
    fontSize: 18,
    fontWeight: "bold",
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  locationIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  exploreRow: {
    display: "flex",
    flexDirection: "row",
    color: "#1B1E28",
    gap: 10,
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  exploreText: {
    fontSize: 40,
    color: "#1B1E28",
    paddingBottom: 5,
  },
  exploreTextBold: {
    fontSize: 40,
    color: "#1B1E28",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  exploreLocation: {
    fontSize: 40,
    color: "#ff6f00",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  bestHotelsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bestHotelsText: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 10,
  },
  viewAllLink: {
    fontSize: 20,
    color: "#ff6f00",
    paddingRight: 10,
  },
  scrollViewContent: {
    display: "flex",
    gap:20,
    margin:10,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  scrollView: {
    overflow: "scroll",
    flex: 1,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    
    marginBottom: 10,
  },
});
