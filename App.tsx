import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
      <Text>Fatec Indaiatuba</Text>
      <TextInput placeholder="Digite algo..." />
      <Pressable>npx expo install expo-router expo-sqlite expo-linking expo-constants expo-status-bar \
  react-native-screens react-native-safe-area-context \
  react-native-gesture-handler react-native-reanimated react-native-worklets
        <text>Pressione aqui</text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
