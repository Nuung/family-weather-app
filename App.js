import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native'; 대신에 아래를 쓰면 된다 이제 
import Loading from "./Loading";


export default function App() {
  return (
    <Loading />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: "blue"
//   }
// });
