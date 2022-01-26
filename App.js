import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Asks from './components/Asks';
import NewAsk from './components/NewAsk';

export default function App() {
  const [asks, setAsks] = useState(
    [
    {
      request: "Tylenol",
      priority: "Soon"
    },
    {
      request: "Hang out",
      priority: "Whenever"
    },
    {
      request: "Bathroom",
      priority: "Right now"
    }
  ]);

  useEffect(() => {
    console.log(asks);

  }, [asks]);
  
  
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>JaxApp</Text>
      <Asks asks={asks} setAsks={setAsks}/>
      <NewAsk asks={asks} setAsks={setAsks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "AvenirNext-UltraLightItalic",
    fontSize: 50,
    margin: 30
  }
});
