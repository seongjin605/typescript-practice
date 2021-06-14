/* 부울 (Boolean)
가장 기본적인 데이터 타입은 JavaScript와 TypeScript가 boolean 값을 호출하는 단순한 true / false 값입니다.*/
var isDone = false;
console.log("isDone => ", isDone);
/* 숫자형 (Number)
JavaScript와 마찬가지로 TypeScript의 모든 숫자는 부동 소수 점 값입니다.
이 부동 소수 점 숫자는 number 타입을 받습니다.
TypeScript는 10진수 및 16진수와 함께 ECMAScript2015에 도입된 2진수 및 8진수 문자를 지원합니다.*/
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
/* 문자열 (String)
웹 페이지와 서버를 위한 JavaScript 프로그램을 만드는 또 다른 기본적인 부분은 텍스트 데이터를 사용하는 것입니다.
다른 언어와 같이 이러한 텍스트의 데이터 타입을 참조하기 위해 string 타입을 사용합니다.
JavaScript와 마찬가지로 TypeScript 또한 문자열 데이터를 감싸기 위해 큰 따옴표(") 또는 작은 따옴표(')를 사용합니다.*/
var color = "blue";
color = "red";
console.log("color => ", color);
/* 여러 줄에 걸쳐 표현식을 포함할 수 있는 템플릿 문자열 을 사용할 수도 있습니다.
이 문자열은 백틱 / 백 쿼트 (` ) 문자로 감싸져 있으며 포함된 표현식은 ${ 표현식 } 형식입니다.*/
var fullName = "Bob Bobbington";
var age = 37;
var sentence1 = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence1);
//이것은 위와 같이 선언한 문장과 같습니다.
var sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
console.log(sentence2);
//배열
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
list1.push(4);
console.log(list1);
/*튜플(tuple)
튜플 타입은 고정된 개수의 요소 타입을 알고 있지만 반드시 같을 필요는 없는 배열을 표현할 수 있도록 합니다.
예를 들어, 다음과 같은 string과 number의 쌍으로 값을 나타낼 수 있습니다*/
var x;
x = ["hello", 123];
//x = [123452, "text"];  //타입 오류
console.log(x);
console.log(x[0].substr(1)); // good
//열거(Enum)
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["Red"] = 0] = "Red";
    ColorEnum[ColorEnum["Green"] = 1] = "Green";
    ColorEnum[ColorEnum["blue"] = 2] = "blue";
})(ColorEnum || (ColorEnum = {}));
var getEnum = ColorEnum.Red;
var getEnum2 = ColorEnum.Green;
console.log("getEnum index => ", getEnum); //Enum index 0부터 시작
console.log("getEnum index => ", getEnum2);
/* enum의 편리한 기능은 숫자 값에서 enum의 해당 값 이름으로 이동할 수 있다는 것입니다.
예를 들어, 값 2를 가지고 있지만 위의 Color enum에서 매핑된 값이 무엇인지 확실하지 않은 경우에 그에 상응하는 이름을 찾을 수 있습니다
*/
var GuessEnum;
(function (GuessEnum) {
    GuessEnum[GuessEnum["Who"] = 1] = "Who";
    GuessEnum[GuessEnum["Are"] = 2] = "Are";
    GuessEnum[GuessEnum["You"] = 3] = "You";
})(GuessEnum || (GuessEnum = {}));
var guessWhat = GuessEnum[2];
console.log("guessWhat => ", guessWhat);
/* Any
어플리케이션을 작성할 때 알지 못하는 변수의 타입을 설명해야 할 수도 있습니다.
이러한 값은 사용자 또는 써드-파티 라이브러리와 같은 동적 컨텐츠에서 비롯될 수 있습니다.
이러한 경우에는, 타입 검사를 선택하지 않고 그 값이 컴파일-타임 검사를 통과하도록 하고 싶습니다.
이를 위해 다음과 같은 any 타입으로 지정합니다.
*/
var notSure = 4;
notSure = "문자열 인가?";
notSure = false;
console.log("notSure => ", notSure);
/*any 타입은 기존 JavaScript로 작업할 수 있는 강력한 방법으로 컴파일 과정에서 타입 검사를 점진적으로 실행 (opt-in) 및 중지(opt-out) 할 수 있습니다.

다른 언어와 마찬가지로 객체도 비슷한 역할을 할 것으로 예상할 수 있습니다.
그러나 객체 타입의 변수를 사용하면 해당 객체에는 값만 할당할 수 있습니다 - 실제로 존재하는 것도 임의의 메서드를 호출할 수는 없습니다*/
var notSure2 = 4;
//notSure2.ifItExists(); // 좋아요, 런타임에 ifItExists가 존재할 수 있습니다.
notSure2.toFixed(); // 좋아요, toFixed는 존재합니다. (그러나 컴파일러는 체크하지 않습니다)
console.log("notSure2 => ", notSure2);
var prettySure = 4;
//prettySure.toFixed(); // 오류: 'Object' 타입에 'toFixed' 프로퍼티는 존재하지 않습니다.
/*any 타입은 일부를 알고 있는 경우에도 유용하지만 모두 그렇지는 않습니다.
예를 들어 배열이 있지만 배열에는 다른 타입이 혼재되어 있습니다*/
var AnyList = [1, true, "free"];
AnyList[1] = 100;
console.log("AnyList[1] =>", AnyList[1]);
/*void는 any의 정반대이지만 조금 비슷합니다: 어떠한 타입의 부재도 전혀 없습니다.
일반적으로 반환 값을 반환하지 않는 함수의 반환 타입으로 볼 수 있습니다*/
function warnUser() {
    alert("This is my warning message");
}
//void 타입의 변수 선언은 undefined 또는 null 만 할당할 수 있으므로 유용하지 않습니다:
var unusable = undefined;
/*TypeScript에서 undefined와 null은 실제로 각기 undefined와 null이라는 자체적인 타입을 가집니다.
void와 마찬가지로 그것들은 매우(극단적으로) 유용하지 않습니다*/
// 그 외에도 이러한 변수에 할당할 수 있습니다!
var u = undefined;
var n = null;
/*Never
never 타입은 절대로 발생하지 않는 값의 타입을 나타냅니다.
예를 들어 never는 함수 표현식의 반환 타입이거나 항상 예외를 던지는 화살표 함수 표현식이거나 절대 반환하지 않는 표현식입니다.
변수는 또한 never 일 때 타입 가드에 의해 좁혀지더라도 결코 사실일 수 없으며 타입을 획득하지 못합니다.

never 타입은 모든 타입의 서브 타입이며 모든 타입에 할당할 수 있습니다.
어떤 타입도 never의 서브 타입이거나 할당 가능한 타입은 아닙니다 (never 자체를 제외하고).
any 조차도 never에 할당할 수 없습니다.

never를 반환하는 함수의 몇 가지 예는 다음과 같습니다*/
// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안 됩니다.
function error(message) {
    throw new Error(message);
}
// 추론되는 반환 타입은 절대로 없습니다.
function fail() {
    return error("Something failed");
}
// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안 됩니다.
function infiniteLoop() {
    while (true) { }
}
/*타입 단언 (Type assertions)
때로는 TypeScript보다 더 많은 값을 알아야 하는 상황에 놓일 수도 있습니다.
일반적으로 이 문제는 일부 엔티티의 타입이 현재 타입보다 더 구체적일 수 있다는 것을 알고 있을 때 발생합니다.

Type assertions 은 컴파일러에게 "나를 믿어, 내가 하고 있는 일을 안다"라고 말하는 방법입니다.
type assertion은 다른 언어의 형 변환(타입캐스팅)과 비슷하지만 특별한 검사나 데이터를 재구성하지는 않습니다.
런타임에 영향을 미치지 않으며 컴파일러에서만 사용됩니다.
TypeScript는 개발자가 필요한 특별한 검사를 수행했다고 가정합니다.

Type assertions은 두 가지 형태를 가집니다.
하나는 "angle-bracket" (꺾쇠괄호) 구문입니다*/
var someValue = "this is a string";
var strLength = someValue.length;
console.log("someValue => ", someValue);
console.log("strLength => ", strLength);
//그리고 다른 하나는 구문은 as 입니다 :
var someValue2 = "this is a string";
var strLength2 = someValue.length;
console.log("someValue2 => ", someValue2);
console.log("strLength2 => ", strLength2);
