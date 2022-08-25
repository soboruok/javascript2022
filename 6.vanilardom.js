/* 1. document
console.log(document.domain); //도메인이름만
console.log(document.URL); //전체 URL
console.log(document.title);
document.title = 123;
console.log(document.title);
console.log(document.head);
console.log(document.body);
*/

/* 2. getElementById
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
//console.log(headerTitle);
headerTitle.innerText = "Hello";
//console.log(headerTitle.innerText); //innerText글자만넣을 수있다.
headerTitle.innerHTML = "<h4>Hello</h4>"; //innerHTML은 태그를 넣을 수있다.
header.style.borderBottom = "solid 3px #000"; //css속성 넣기
*/

/* 3. getElementsByClassName
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "#f4f4f4"; //에러발생그래서아래와같이 for문으로..
//for문을 사용한 전체 적용
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}
*/

/* 4. QuerySelector
:jQuery처럼 선택 할 수있다. $('') querySelector가 $대체한다고 보면된다. 
//요소에 스타일을 적용한다.
var main = document.querySelector("#main");
main.style.borderBottom = "solid 4px #000";

//input value에 값을 바꾼다..
var input = document.querySelector("input");
input.value = "Hello World";

//input type = submit의 값을 바꾼다.
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

//첫번째아이템선택
var item = document.querySelector(".list-group-item");
item.style.color = "red";

//마지막아이템선택
var lastitem = document.querySelector(".list-group-item:last-child");
lastitem.style.color = "blue";

//n차 아이템 선택
var seconditem = document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.color = "green";
*/

/* 5. QuerySelectorall
var titles = document.querySelectorAll(".title");
titles[0].textContent = "포기하지마";

//querySelector는 odd, even사용못한다. 그래서 querySelectorAll사용한다.
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
*/
