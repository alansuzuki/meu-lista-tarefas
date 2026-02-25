import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
      <Text>Fatec Indaiatuba</Text>
      <TextInput placeholder="Digite algo..." />
      <Pressable>
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
