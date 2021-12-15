// 1.	Использовать SVG для выполнения ДЗ
console.log(`${document.documentElement.nodeName}`);

// 2.	Создание элемента
let pepega = document.createElement("pepegaName");
console.log(`${pepega.nodeName}`);

// 3.	Получение элементов по селектору
var list = document.getElementsByTagName("g");
console.log(`${list[1].id}`);

// 4.	Получение элемента по селектору
let sel = document.getElementsByTagName("g")[0];
console.log(`${sel.id}`);

// 5.	Навигация по DOM

// 20. Переход к родителю
let parent = sel.parentNode;
console.log(`parent: ${parent.id}`);

// Потомки
// 16.	Узлы-потомки
let child = sel.childNodes;
console.log(`1st node child: ${child[0].nodeName}`);

// 19.	Элементы-потомки
let childElems = sel.children;
console.log(`1st element child: ${childElems[0].id}`);

// 17. Переход к предедущему элементу
let prevEl = sel.previousElementSibling;
console.log(`Previous element: ${prevEl.id}}`);
// 18. Переход к следующему элементу
let nextEl = sel.nextElementSibling;
console.log(`Next element: ${nextEl.id}`);
// 15. Переход к предедущему узлу
let prevNode = sel.previousSibling.previousSibling; //двойная команда для пропуска текстового узла(пробела), спасибо gecko
console.log(`Previous node: ${prevNode.id}}`);
// . Переход к следующему узлу
let nextNode = sel.nextSibling.nextSibling;   //двойная команда для пропуска текстового узла(пробела), спасибо gecko
console.log(`Next node: ${nextNode.id}}`);


// 6. Создание фрагмента документа
 var frag = document.createDocumentFragment();

// 7. Манипуляции с аттрибутами
//Создание
  //установка класса
  //pepega.setAttribute("class", "pepegaClass");
  pepega.className= "PepegaClass";
  console.log(`Pepega class before deletion: ${pepega.className} ${pepega.attributes.class}`);
  // 12. установка id
  pepega.setAttribute("id", "pepegaID");
  console.log(`Pepega id before deletion: ${pepega.id}`);
//Удаление
// 8. Удаление аттрибута
// 11. Удаление класса
pepega.removeAttribute("class");
console.log(`Pepega class after deletion: ${pepega.ClassName} ${pepega.attributes.class}`);
// Удаление id
pepega.removeAttribute("id");
console.log(`Pepega id after deletion: ${pepega.id}`);

//изменение html в текстовом виде
let randomtext = "<text>RandomPepegaText</text>" //не отображается ='( но в консоли есть

pepega.innerHTML = randomtext;


//21,22,23,24,25 Добавить первым/последним/в середину в элемент
//console.log(`${document.childNodes[0].childNodes[7].nodeName}`)

sel.insertBefore(pepega,sel.childNodes[5]);
//sel.insertBefore(pepega,sel.childNodes[5].nextElementSibling);  //insertAfter

sel.insertAdjacentHTML("beforeBegin", "<text>RandomText</text>");
sel.insertAdjacentHTML("afterBegin", "<text>RandomText</text>");
sel.insertAdjacentHTML("beforeEnd", "<text>RandomText</text>");
//namespace 29
sel.insertAdjacentHTML("afterEnd", "<text xmlns:w='http://www.wikipedia.org'><w:p>RandomnamespaceText</w:p></text>");


//26 Delete from DOM
//let rect = document.getElementById("rect22")
//rect.remove()

//28 add elem fragm

frag.innerHTML =  "<text>FragText</text>"
sel.appendChild(frag); // вместо фрагмента вставятся его innerHTML

//27 text normalisation


let newtext = document.createElement("text");

let txt1 = document.createTextNode("Your text ");
let txt2 = document.createTextNode("can be written here");

newtext.appendChild(txt1);
newtext.appendChild(txt2);

pepega.appendChild(newtext);

newtext.normalize();

//getbyid30
console.log(document.getElementById("rect22").nodeName);

//30. scope

let rnd = document.childNodes[0];
if (rnd.matches(":scope")) {
  pepega.innerText = "Yep, the element is its own scope as expected!";
}
console.log(pepega.innerText)

//31 мыш
rnd.onclick = function(){

setTimeout(() => {  rnd.innerHTML="<rect x='10' y='10' width='1000' height='1000' rx='15' ry='15' style='fill:rgb(0,0,125)'/>" }, 1000);
setTimeout(() => {  rnd.innerHTML="<rect x='10' y='10' width='1000' height='1000' rx='15' ry='15' style='fill:rgb(0,125,0)'/>" }, 2000);
setTimeout(() => {  rnd.innerHTML="<rect x='10' y='10' width='1000' height='1000' rx='15' ry='15' style='fill:rgb(125,0,0)'/>" }, 3000);
setTimeout(() => {  rnd.innerHTML="" }, 4000);};

function stop(event) {
      event.stopPropagation();
    }

document.addEventListener("click", stop,false);



//32 клавиатура
document.onkeydown = function(){
setTimeout(() => {  rnd.innerHTML="" }, 100);};

//или
document.addEventListener('keyup', function(event){
    console.log('Key: ', event.key);
    console.log('keyCode: ', event.keyCode);
});

//34 scroll
//window.onscroll = function(){};
document.addEventListener('scroll', function(event){
     setTimeout(() => {  rnd.innerHTML="" }, 100);
});

//35,36,37 custom event

document.addEventListener("hello", function(event) {
    console.log("Привет от " + this.nodeName);
  });

  // ...запуск события на элементе!
  let event = new Event("hello", {bubbles: true});
  document.dispatchEvent(event);


//38?? Немедленное прекращение отправления


//40 delete event listener


document.addEventListener("stop", stop);
document.removeEventListener("stop", stop);
