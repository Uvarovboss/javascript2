// function asdas(a,b){
// 	var c=a+b;
// 	return c;
// }
// alert(asdas(2,6));


			//ffgfgf

// function ssss(){
// 	var a =Number(prompt("imsdeud"));
// 	var box =0;
// 	for (var i = 1; i <= a; i++) {
// 		box += i;
// 	}
// 	alert(box);
// }
// ssss();

			//age
// function age(question,less,more){
// 	if (confirm(question)) {
// 		more();
// 	}
// 	else{
// 		less();
// 	}
// }
// age("Есть ли тебе 18?",function(){alert("вы подросток!")},function(){alert("вход разришон")});



// function age(question,less,more){
// 	if (confirm(question)) {
// 		more();
// 	}
// 	else{
// 		less();
// 	}
// }
// age("Есть ли тебе 18?",function(){alert("вы подросток!")},function(){alert("вход разришон")});


//  function task(str){
//  	var spaceString = 0;
//  	// var str4 = "";
//  	var j = 1;
//  	for (var i = 0; i < str.length; i++) {
//  // 		if (str[i] == " "){
//  // 			spaceString++;
// 	// }
//  		if (j%4==0) {
//  			str4+=str[i];
//  		}
//  		j++;
//  }	
//  alert(spaceString);
//  alert(str4);
// }
// task("Hello World");

//Канкулятор
	
// function calc(a,b,stri){
// 	 a = Number(prompt("Введите чссло"));
// 	 b = Number(prompt("Введите второе число"));
// 	 stri = Number(prompt("1 /,2 *,3 +,4 -"));
// 	 if (stri===1) {
// 	 	alert(a/b);
// 	 }
// 	 if(stri===2){
// 	 	alert(a*b);
// 	 }
// 	 if(stri===3){
// 	 	alert(a+b);
// 	 }
// 	 if (stri===4) {
// 	 	alert(a-b);
// 	 }
// }
// calc();

		//Вывод плохого слова

// var str ="some string with bad word bad";
//  var index = 1;
//  var finish ;
//  while (index != -1){
//  	index = str.indexOf("bad");
//  	if (index!=-1) {
//  		finish = str.substring(0, index) + "****" + str.substring(index + 3);
//  		str = finish;
//  		alert(finish);
//  	}
//  }


// проверка обьекта

// var menu ={
// 	width:300,
// 	height:200,
// 	title:"Menu"
// };
// for (var i in menu){
// 	console.log(menu[i]);
// }

 

 //indexOf

//  var str = "Осдик ИА ИА осликж"
// var target= "осл";
// var pos =0;
// while(true){
// var pos = str.indexOf(target,pos)
// if(pos ==-1) break;
// alert(pos);
// pos++;
// }

// toUpperCase

// function ucFIrst(str){
// 	var newStr=str[0].toUpperCase();
// 	var strt1 = newStr +str.slice(1);
// 	alert(strt1);
// }
// ucFIrst("hello");

// function truncate(str,maxlength){
// 	var newStr = str.length;
// 	if (newStr > maxlength) {
// 		var newBody = str.substring(0,maxlength -3)  +"...";
// 		alert(newBody);
// 	}
// 	else{
// 		alert(str);
// 	}
// }
// truncate('jdjfjjdsdhfjhrjfr',5);


		// FOR IN перебор

// var menu ={
// 		width:200,
// 		height:300,
// 		dsdsd:400,
// 		qwqwq:2200,
// 		title:"My menu"
// 	};

// 	function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric(obj){
// 	for(var key in obj){
// 		if (isNumeric(obj[key])===true) {
// 			obj[key] = obj [key] * 2;
// 		}
// 	}
// 	return obj ;
// }
// var menu2 = multiplyNumeric(menu);
// console.log(menu2);


// 	(function () {
//     function change(ulClass, cssProperty) {
//         var ListItems = document.querySelectorAll('.' + ulClass + ' li');
//         for (var i = 0; i < ListItems.length; i++) {
//             var previous = ListItems[i].previousSibling;
//             while(previous.nodeType!=8 && previous.previousSibling!= null) {
//                 previous = previous.previousSibling;
//             }
//             ListItems[i].style[cssProperty]=previous.data;
//         }
//     }
//     change('foreground', 'color');
//     change('background','backgroundColor');
// })();


// function Car (model,type,color,price){
//     this.model = model;
//     this.type = type;
//     this.price = price;
//     this.color = color;
//     this.getInfo = function(){
//         alert (this.price);
//     }
//     this.maxKM = function(){
//         document.write("масимальное расстояние" + Math.round(this.))
//     }
// }

// var myCar = new Car ('Audi','A8','green','45000');
// var myCar1 = new Car ('Mustang','GT','grey','20000');
// var myCar2 = new Car ('Masarati','250','black','220000');
// var myCar3 = new Car ('BWV','E750','blye','55000');
// var myCar4 = new Car ('Paganizonda','F70','silver','68000');

// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);
// console.log(myCar3);
// console.log(myCar4);

function Car(mark, type, weight, model, places, maxSpeed, color, engineType, amount, consumption) {
    this.mark = mark;
    this.type = type;
    this.weight = weight;
    this.model = model;
    this.places = places;
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.engineType = engineType;
    this.amount = amount;
    this.consumption = consumption;
    this.getInfo = function() {
        document.write('Марка: ' + this.mark + '<br>');
        document.write('Тип: ' + this.type + '<br>');
        document.write('Масса: ' + this.weight + 'кг' + '<br>');
        document.write('Модель: ' + this.model + '<br>');
        document.write('Кількість місць: ' + this.places + '<br>');
        document.write('Максимальна швидікість: ' + this.maxSpeed + 'км/год' + '<br>');
        document.write('Колір: ' + this.color + '<br>');
        document.write('Тип двигуна: ' + this.engineType + '<br>');
        document.write('Обєм двигуна: ' + this.amount + ' л.' + '<br>');
        document.write('Витрата двигуна: ' + this.consumption + ' л на 100 км' + '<br>');
        document.write('Максимальна дистанція на повний бак: ' + Math.round(parseFloat(amount) / parseFloat(consumption) * 100) + ' км.');
    }
}


function allInfo() {
    var car = prompt("Виберіть марку автомобіля: Audi, Mustang, Masarati, Subaru, BWV");
    switch (car) {
        case 'Audi':
            Audi.getInfo();
            break;
        case 'Mustang':
            Mustang.getInfo();
            break;
        case 'Masarati':
            Masarati.getInfo();
            break;
        case 'Subaru':
            Subaru.getInfo();
            break;
        case 'BWV':
        BWV.getInfo();
            break;
        case '':
            alert('Ви не ввели назву автомобіля!');
            break;
        default:
            alert("Такого автомобіля в наявності немає. Вибачте");
    }
}

var Audi = new Car('Audi ', 'compartment', 1900, 'A8', 4, 330, 'white', 'fuel', 80, 10);
var Mustang = new Car('Mustang', 'sport car', 1300, 'GT', 2, 280, 'silver', 'fuel', 60, 12);
var Masarati = new Car('Masarati', 'Sedan', 1100, '', 4, 300, 'blue', 'gaz', 70, 5);
var Subaru = new Car('Subaru', 'Jeep', 2200, 'Impreza', 4, 320, 'black', 'fuel', 70, 8);
var BWV = new Car('BWV', 'Sedan', 1800, 'E750', 4, 300, 'silver', 'fuel', 80, 7);

allInfo();

