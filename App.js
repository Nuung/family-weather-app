// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native;'
// import { StyleSheet, Text, View } from 'react-native'; 대신에 아래를 쓰면 된다 이제 
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getLocation = async() => {
    try {
      // throw Error(); 에러 테스트를 위한 throw error!
      // 아래 함수의 매개변수 값 API에서 참조 
      // const location = await Location.getCurrentPositionAsync();
      // console.log(location.coords.latitude, location.coords.longitude);

      // 아래와 같이 한번에 object 내부의 object -> attribute에 접근 가능 
      const { 
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();

      this.setState({ isLoading: false });
      
    } catch (error) {
      Alert.alert("Can't Find you with error : " + error, "So Sad");
    }
  }
  
  componentDidMount(){
    // Location.getCurrentPositionAsync() -> 비동기 사용을 위해 함수 하나 위에 처럼 만들기 
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return (
      isLoading ? <Loading /> : null
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
