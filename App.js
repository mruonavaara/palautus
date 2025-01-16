import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [text, setText] = useState("");

  const handlePress = () => {
    Alert.alert("You typed:" + text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Enter some text'
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button onPress={handlePress} title="Press me" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
