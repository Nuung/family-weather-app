# 0.4 Getting to know Expo (06:09)
https://nomadcoders.co/react-native-fundamentals/lectures/1573 

###

## live reloading vs hot reloading
 - live reloading : expo가 프로젝트 변경을 저장을 통해 자동 리프레쉬를 해주고 바로 변경사항을 적용시켜준다. 디버깅이나 적용 사항을 바로 바로 할 수 있다. 커멘트 + D를 누르면 expo 디버깅 모드를 들어갈 수 있다. 

 - hot reloading : 


# 0.5 How does React Native Work? (08:58)
https://nomadcoders.co/react-native-fundamentals/lectures/1574

###

## React-Native App 만들기 
 - 1) Fully Native : Swift or Objective-c 로 IOS 앱 만들기 / Android Studio with Java or Kotlin / 언어도 다르고 Xcode 를 사용할 수 있다.
 
 - 2) Web View 기반으로 만들기 : Cordova or PhoneGap - with HTML CSS... native를 저런 프레임 워크들이 껍데기만 앱 처럼 바꿔줌. 웹사이트를 뷰만 바꿔주는 느낌. 네이티브 특징들을 거의 접근하기가 힘들다. 

 - 3) 하이브리드 앱 : ReactNative ... https://tansfil.tistory.com/57 참고 ㅎ / 브릿지가 있다는 것

## React-Native 태그

 - xml 태그 처럼 react와 조금 다르게 React-Native 가 가지는 tag들의 특징들이 있다. 가령 <View>와 그리고 모든 String values (표기할 글자들)은 <Text>안으로 들어가야 한다. 지금은 가볍게 <div>라고 생각하고 넘어가자 

 - 이런 룰이 '브릿지' 때문이라는 점이다. 브릿지가 Native하게 바꿔줘야 하니까!

 - React-Native는 CSS엔진도 있기때문에 CSS 처럼 문법을 사용할 수 있다! like Flex-box / 차이점은 js object처럼 써줘야 한다. 예외가 몇 몇 경우가 있다. 이런 것을 *StyleSheet API* 라고 한다. 
	하지만 당연히 예외가 있다. 부모의 컬러를 안따른다던지, 부모의 box style과 달라진다던지 등의 경우는 분명히 존재한다. 
