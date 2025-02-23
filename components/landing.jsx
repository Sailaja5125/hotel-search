import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useWarmUpBrowser } from './SignInWithOAuth';
import * as WebBrowser from 'expo-web-browser';
// import { Link } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();



export default function Landing() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      });
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        console.log('Sign in failed');
      }
    } catch (err){
      console.error('OAUTH failed ',err);
    }
  }, []);

  return (
    <View>
      <Image
        source={require('./../assets/images/unsplash_ctt1CPCgJCM.png')}
        style={{ width: '100%', height: '100%' }}
      />
      <View style={styles.container}>
        <Text
          style={styles.title}
        >
          Life is short and the world is wide
        </Text>
        <Text
          style={styles.subtitle}
        >
          At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text
          style={styles.buttonText}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '40%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#7D848D',
    textAlign: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#ff6f00',
    borderRadius: 30,
    padding: 10,
    height: 50,
    position: 'absolute',
    bottom: 50,
    left: 60,
    alignItems: 'center',
    width: 300,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
