import React from 'react';

// import { StyleSheet, Text, View } from 'react-native'; 대신에 아래를 쓰면 된다 이제 
import Loading from "./Loading";

// modules or lib
import * as Location from "expo-location";
import { Alert } from 'react-native';
import getEnvVars from './env';
import axios from "axios"; // axios for fetching to API
import Weather from './Weather';

const { apiUrl } = getEnvVars(); // for api key by using env val
console.log(apiUrl); // api key

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    try {
      const { 
        data: {
          main: { temp }, 
          weather 
        }
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiUrl}`
      );
      // console.log(temp, weather); 
      this.setState({
        isLoading: false, 
        condition: weather[0].main,
        temp
      });
    } catch (error) {
      Alert.alert("Can't fetch to Api : " + error, "cancel");
    }
  }

  getLocation = async() => {
    try {
      // throw Error(); 에러 테스트를 위한 throw error!
      // 아래 함수의 매개변수 값 API에서 참조 
      // const location = await Location.getCurrentPositionAsync();
      // console.log(location.coords.latitude, location.coords.longitude);

      // 아래와 같이 한번에 object 내부의 object -> attribute에 접근 가능 
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });

    } catch (error) {
      Alert.alert("Can't Find you with error : " + error, "So Sad");
    }
  }
  
  componentDidMount(){
    // Location.getCurrentPositionAsync() -> 비동기 사용을 위해 함수 하나 위에 처럼 만들기 
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={(temp).toFixed(1)} condition={condition} />
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
