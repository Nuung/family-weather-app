# 0.4 Getting to know Expo (06:09)
https://nomadcoders.co/react-native-fundamentals/lectures/1573 

###

## live reloading, hot reloading

 [link to 출처](https://stackoverflow.com/questions/41428954/what-is-the-difference-between-hot-reloading-and-live-reloading-in-react-native)

 - Live reloading reloads or refreshes the entire app when a file changes. For example, if you were four links deep into your navigation and saved a change, live reloading would restart the app and load the app back to the initial route.

 - Hot reloading only refreshes the files that were changed without losing the state of the app. For example, if you were four links deep into your navigation and saved a change to some styling, the state would not change, but the new styles would appear on the page without having to navigate back to the page you are on because you would still be on the same page.

 - 핫 리로딩(hot reloading) : 애플리케이션을 개발할 때는 일반적으로 코드를 조금씩 수정해가면서 만들게 된다. 매 수정 뒤에 결과를 빨리 확인할 수 있으면 (그리고 작은 실수를 했을 때 고친 뒤 빨리 확인할 수 있다면), 개발 속도를 올릴 수 있을 것이다.

 - 핫 리로딩의 멋진 점은 매 수정 뒤에도 애플리케이션의 상태가 사라지지 않는다는 점이다. todo 애플리케이션의 특정 화면을 테스트한다고 해보자. todo 아이템을 몇 개 추가하고 그 중 몇개는 완료처리를 했는데 그 뒤에 보니 UI 텍스트를 수정을 해야 하는 상황이다. 예를 들어, 플레이스홀더(placeholder)를 “New toto”에서 “New todo”로 수정해야 한다.

 - 핫 리로딩이 없다면, 다음과 같이 해야 할 것이다:

```
코드를 수정한다
브라우저의 페이지를 새로고침한다
데이터를 재입력한다
```

# 0.5 How does React Native Work? (08:58)
https://nomadcoders.co/react-native-fundamentals/lectures/1574

###

## React-Native App 만들기 
 - 1) Fully Native : Swift or Objective-c 로 IOS 앱 만들기 / Android Studio with Java or Kotlin / 언어도 다르고 Xcode 를 사용할 수 있다.
 
 - 2) Web View 기반으로 만들기 : Cordova or PhoneGap - with HTML CSS... native를 저런 프레임 워크들이 껍데기만 앱 처럼 바꿔줌. 웹사이트를 뷰만 바꿔주는 느낌. 네이티브 특징들을 거의 접근하기가 힘들다. 

 - 3) 하이브리드 앱 : ReactNative ... https://tansfil.tistory.com/57 참고 ㅎ / 브릿지가 있다는 것

## React-Native 태그

 - xml 태그 처럼 react와 조금 다르게 React-Native 가 가지는 tag들의 특징들이 있다. 가령 <View>와 그리고 모든 String values (표기할 글자들)은 <Text>안으로 들어가야 한다. 지금은 가볍게 div 정도로 생각하고 넘어가자 

 - 이런 룰이 '브릿지' 때문이라는 점이다. 브릿지가 Native하게 바꿔줘야 하니까!

 - React-Native는 CSS엔진도 있기때문에 CSS 처럼 문법을 사용할 수 있다! like Flex-box / 차이점은 js object처럼 써줘야 한다. 예외가 몇 몇 경우가 있다. 이런 것을 **StyleSheet API** 라고 한다.

``` 
하지만 당연히 예외가 있다. 부모의 컬러를 안따른다던지, 부모의 box style과 달라진다던지 등의 경우는 분명히 존재한다.
``` 
