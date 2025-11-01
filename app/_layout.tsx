import { Stack } from "expo-router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css'
import { PortalHost } from '@rn-primitives/portal'
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack/>
      <PortalHost/>
    </SafeAreaProvider>
  );
}
