# MOMENTUM

## Vanilla JS로 크롬 앱 만들기

<br />

### **background.js**

저장된 배경이미지를 랜덤으로 출력

- 이미지 파일명을 배열 인덱스 값에 맞춰 저장 후 배열 생성
- Math.random()을 이용해 이미지 수를 랜덤으로 받는 변수 생성
- 이미지 경로에 랜덤으로 받은 변수 사용

### **clock.js**

현재 시간, 분, 초 출력

- 한 자릿수로 출력되는 분과 초를 두 자릿수로 출력하기 위해 padStart() 사용

### **greeting.js**

모달창에서 로그인, 로그인 후에는 Hello 메세지 출력

- username을 localStorage에 저장
- css의 .hidden {display: hidden;} 을 이용해 로그인 여부에 따른 출력 form 변경
- localStorage에 username이 있을 시 login-form에 .hidden 클래스를 add
- username이 없으면 .hidden remove()
- login 버튼에 submit event
- event.preventDefault();을 이용해 submit 이벤트의 새로고침을 중단

### **quote.js**

- array에 object 형태로 명언 추가
- Math.random()을 이용하여 랜덤 명언 출력

### **todo.js**

추가, 삭제 가능한 TODO LIST

- 작성한 TODO LIST를 새로고침해도 사라지지 않도록 localStorage에 저장
- 작성한 todo의 id 값으로 Date.now()를 사용하여 삭제 시 클릭한 todo가 무엇인지 체크
- event.preventDefault();을 이용해 submit 이벤트의 새로고침을 중단

### **weather.js**

현재 날씨, 섭씨 온도, 위치 출력

- [Weather API](https://openweathermap.org/api) 사용
- api를 이용해 위도, 경도를 받아와서 현재 위치 찾음

  <br/><br/><br/>

##### [노마드코더](https://nomadcoders.co/) - 바닐라 JS로 크롬 앱 만들기
