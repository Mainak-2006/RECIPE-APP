import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache'

export default function RootLayout() {
  return (
      <ClerkProvider tokenCache={tokenCache}>
      <Slot/>
      <StatusBar style="inverted" />
      </ClerkProvider>
  );
}
