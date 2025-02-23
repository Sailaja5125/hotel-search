import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import React, { useState, useRef } from "react"; // Import useRef
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Slider({ hotel }) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation value

  const handleImagePress = () => {
    setIsTextVisible(!isTextVisible);
    Animated.timing(fadeAnim, {
      toValue: isTextVisible ? 0 : 1, // Fade in or out
      duration: 300, // Animation duration
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: hotel.images[2].thumbnail }}
          style={{
            height: 242,
            width: 197,
            borderRadius: 30,
            backgroundColor: "black",
            marginRight: 3,
          }}
        />
      </TouchableOpacity>

      {isTextVisible && (
        <Animated.View
          style={{
            opacity: fadeAnim, // Bind opacity to the animated value
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              position: "absolute",
              bottom: 20,
              left: 10,
            }}
          >
            {hotel.name}
          </Text>
        </Animated.View>
      )}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#ff6f00",
            borderRadius: 30,
            padding: 10,
            alignItems: "center",
            marginTop: 10,
            width: 197 / 1.5,
          }}
          onPress={() => console.log("Button Pressed")}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Check out
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <AntDesign name="star" size={18} color="yellow" />
          <Text>{hotel.overall_rating}</Text>
        </View>
      </View>
    </View>
  );
}