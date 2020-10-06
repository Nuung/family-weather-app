# EXPO에서 환경변수 값 사용하기 

###

## Constants Module
- [API 참조](https://docs.expo.io/versions/latest/sdk/constants/)
    ``` 
    expo install expo-constants 

    // 그리고 모듈 임포트 해주기 (아래)
    import Constants from 'expo-constants';
    ```
- [Constants 실 사용 블로그](https://velog.io/@thms200/ExpoReact-Native-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
    - 위 내용 바탕으로 모듈 불러오고 -> export default getEnvVars 로 export를 해준 다음 아래와 같이 그 것을 불러와서 상수로 접근해서 사용하자! 
    ```
    import getEnvVars from '../environment';
    const { apiUrl } = getEnvVars();
    ```
    - 깃 이그노어에 **environment** 를 추가만 해주자!