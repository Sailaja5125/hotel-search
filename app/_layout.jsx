import { Stack } from "expo-router";
import { ClerkProvider,  SignedIn , SignedOut } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import Landing from "../components/landing"

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const createTokenCache = {
  
     async getToken(key){
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('secure store get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key, token){
      try {
        return SecureStore.setItemAsync(key, token)
        
      } catch (error) {
        return
      }
    },
  }

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}
export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={createTokenCache} publishableKey={publishableKey}>
    <SignedIn>
    <Stack screenOptions={{
      headerShown: false,
    }}
    >
        <Stack.Screen name="(tabs)" >
        </Stack.Screen>
    </Stack>
    </SignedIn>

    <SignedOut>
      <Landing/>
    </SignedOut>
  </ClerkProvider>
  )
}
