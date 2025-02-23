import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Full Name" style={styles.searchInput} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone Number" style={styles.searchInput} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="No of Person" style={styles.searchInput} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button Pressed')}
      >
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: 370,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (bottom shadow)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // For Android shadow
  },
  searchInput: {
    color: '#1B1E28',
    paddingLeft: 50,
    width: '100%',
    height: '100%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff6f00',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    width: 370,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});