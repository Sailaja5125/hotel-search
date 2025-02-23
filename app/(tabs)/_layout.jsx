import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff6f00",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          padding: 4 
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <Text style={{
                color: focused ? "blue" : "grey",
                fontSize: 18,
                fontWeight: "bold"
              }}>
                Search
              </Text>
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                bottom: 4,
                backgroundColor: "blue",
                borderRadius: 40,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="search" size={30} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          tabBarLabel: "Booking",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="hotel" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
