// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native'; 대신에 아래를 쓰면 된다 이제 
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  
  getLocation = async() => {
    // 아래 함수의 매개변수 값 API에서 참조 
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }
  
  componentDidMount(){
    // Location.getCurrentPositionAsync() -> 비동기 사용을 위해 함수 하나 위에 처럼 만들기 
    this.getLocation();
  }

  render() {
    return (
      <Loading />
    );
  }
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
