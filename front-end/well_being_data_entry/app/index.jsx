import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl" style={{ textAlign: 'center' }}>Notifying And Prompting System For Wellbeing Data Enter</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}}>"Go to home"</Link>
    </View>
  );
}
