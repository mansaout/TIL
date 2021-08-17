##### 최초작성일 : 2021. 8. 11.<br><br>
# 01. 기본 문법 - 문장, 변수, 정수, 실수, 상수, 진수
[문장](#문장)  
[변수](#변수)  
[정수, 실수](#정수-실수)  
[상수](#상수)  
[진수](#진수)  
[Reference](#reference)

<br><br>

## **문장 (statement)**
- js코드의 실행 단위
- 세미콜론(;)까지가 하나의 문장
- 문장의 시작 위치는 제약 없음

```js
var airpod = "에어팟";	//한 문장

if (true) {
	var airpod = "에어팟";
}  //한 문장
```

<br><br>

## **변수 (Variable)**
- 값을 저장하는 영역
- 변수에 값을 저장하고 그 값을 재사용하는데 목적
- 의미를 부여하여 변수 이름 작명(Semantic)

```js
//변수 선언
var mouse;

//값을 변수에 할당, 오른쪽의 값을 왼쪽의 변수에 할당, =은 할당연산자
var mouse = "마우스";

//변수 다수 작성, 콤마 사용
var cup = "컵",
book = "책";

//변수의 값은 나중에 할당한 값으로 바뀜
var coffee = "커피",
coffee = "커어피";
console.log(coffee);//출력값 => 커어피
```

<br><br>

## **정수, 실수**

### **정수**
- 소수가 없는 수
- 123, -123

### **실수**
- 소수를 가진 수
- 1.23, 1.0

### JS는 정수, 실수를 구분하지 않음
- 부동 소수점 처리 - 정수를 실수로 간주하여 처리
- ES6에 정수, 실수 구분 추가

```js
//1, 1., 1.0 모두 1.0으로 간주, 단 표시는
console.log(1, 1., 1.0, 1);//출력값 => 1 1 1 1

//소수점 앞에 값이 없으면 0을 붙임
console.log(.1234);//출력값 => 0.1234

//정수와 실수의 계산 => 실수로 변환하여 계산됨
console.log(0.99 + 9);//출력값 => 9.99
```

<br><br>

## **상수**
- 변경할 수 없는 값
- 상수 변수
  - 상수가 설정된 변수
  - js는 변수의 값을 변경할수 있으므로
  - **상수 변수는 선언적 의미(Sementic)**
- js가 제공하는 상숫값은 변경 불가
  - MAX_VALUE, MIN_VALUE 등
```js
//관례로 영문 대문자 사용
var ONE = 1;
var TWO = 2;

//js가 제공하는 상숫값
console.log(Number.MAX_VALUE);//출력값 => 1.7976931348623157e+308
```




<br><br>

## **진수**

### **10진수**
- 0123456789

### **16진수 (0XFF)**
- 0123456789ABCDEF
- 첫째자리 0
- 둘째자리 x
- 셋째자리이후 0~f 작성
- 대소문자 구분 x
```js
//0xff
console.log(0xf);	//출력값 => 15
console.log(0xff);  //출력값 => 255
console.log(0xfff); //출력값 => 4095
```

### **8진수 (0o1**)
- ES3에서 폐지, es6에서 재정의
- 01234567
- 첫째자리 0
- 둘째자리 o (영문)
- 셋째자리이후 0~7 작성
- 대소문자 구분 x
```js
//0o1
console.log(0x1);	//출력값 => 1
console.log(0x10);  //출력값 => 8
```

### **2진수**
- ES6에서 제공
- 머신러닝, 딥러닝과 같이 GPU를 사용하는 환경에서 주로 쓰임





<br><br>

---
### **Reference**
- [자바스크립트 비기너: 튼튼한 기본 만들기](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88)
- [모던 Javascript 튜토리얼](https://ko.javascript.info/)