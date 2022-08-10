// // a = 15;
// // console.log(a);

// // let number = 5;
// // const leftBorderWidth = 1; 

// // number =10;



// // const obj = {
// //     a: 50
// // };

// // obj.a=10;
// // console.log(obj);


// // const a =5000;
// // const b = 4000;
// // console.log("Ширина кузова автомобиля: " + a + ', длина: ' + b);

// // const obj = {
// //     name: "John",
// //     age: 25,
// //     isMarried:false

// // };
// // const obj = {
// //     name: "John",
// //     age: 25,
// //     isMarried:false

// // };

// // const b = "c";

// // obj.c = 'new';
// // console.log(obj.c);

// // console.log(obj.name);

// // //or

// // console.log(obj["isMarried"]);

// // //прописание массивов
// // let arr = ['plum.png', 6, ];

// // console.log(arr[1]);

// // let storeName = "Metro";

// // const storeDescription = {
// //   budget: 10000,
// //   employees: ['Vasya', 'Petya', 'Alena'],
// //   products: {
// //     crisps: 1.5,
// //     milk: 1
// //   },
// //   open: true
// // };

// // storeDescription.employees[10] = 'Anna';

// // console.log(storeDescription.employees);


// // alert('hello');

// // const result = confirm('Are you here?');

// // console.log(result);

// // const answer = +prompt('Are you 18?', '18');
// // console.log(typeof(answer));


// // const answer = [];

// // answer[0] = prompt('What is your name?', '');
// // answer[1] = prompt('Sername', '');
// // answer[2] = prompt('Age?', '');

// // document.write(answer);

// // const category = 'toys';

// // console.log(`https://someurl.com/${category}/5`);

// // const user = 'Serhii';

// // alert(`hello ${user}`);

// // let incr = 10,
// //     decr = 10;

// // //инкременты
// // incr++;
// // ++incr;

// // //дискременты
// // --decr;
// // decr--;



// // console.log(++incr, --decr);

// // const isChecked = true,
// //       isClose = false;

// // console.log(isChecked && isClose);

// // console.log(isChecked || isClose);

// //-------- if ------



// //  const num = 101;

// //  if (num < 49) {
// //     console.log('error');
// //  } else if (num > 100) {
// //      console.log('too much');
// //  } else {
// //      console.log('ok');
// //  }

// //------- тернарный оператор -------
// // const t = 50;

// // (t == 50) ? console.log('ok') : console.log('error');


// //------- switch -------
// // const num=51;

// // switch (num) { // строгое стравнение
// //     case 49:
// //         console.log('no');
// //         break;
// //     case 50:
// //         console.log('ok');
// //         break;
// //     default:
// //         console.log('nope');
// //         break;
// // } 


// // const a = 1,
// //       b = 2;


// // console.log ((a && b)); //  => return 0 if one of arg is 0; return the 2nd argument 


// // let jR, mR, fR, sR = 'done';

// // console.log(jR && mR && fR && sR);

// // console.log(!1)


// //------- Что выведет в консоль код? -------

// // console.log( NaN || 2 || undefined );

// // console.log( NaN && 2 && undefined );

// // console.log( 1 && 2 && 3 );

// // console.log( !1 && 2 || !3 );

// // console.log( 25 || null && !3 );

// // console.log( NaN || null || !3 || undefined || 5);

// // console.log( NaN || null && !3 && undefined || 5);

// // console.log( 5 === 5 && 3 > 1 || 5);


// // //------- Выполняется ли условие? -------
// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }

// // //--

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger || cola || fries === 3 || nuggets) {
// //    console.log('Done!')
// // }

// // //--
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }

// // let n = 50;

// // while (n <= 60) {
// //     console.log(n);
// //     ++n;
// // }

// // let n = 50;  

// // do {
// //     console.log(n);
// //     n++;
// // }
// // while (n<60);

// // let n = 50;

// // for (let i =1; i < 8; i++) {
// //     console.log(n);
// //     n++;
// // }

// // let k = '*';

// // for (let i = 1; i <= 6; i++) {
// //     console.log(k);
// //     k = '*' + k;
// //  }


// // let result = '';


// //     result += "*";
// //     result += '\n';
// //     result += "*";
// //     result += '\n';
// //     result += "*";

// //  console.log(result);

// // first: for (let i =0; i < 3; i++) {
// //     console.log(`First level: ${i}`);
// //     for (let j =0; j < 3; j++) {
// //         console.log(`Second level: ${j}`);
// //         for (let k =0; k < 3; k++) {
// //             if (k===2) /* continue */ break first;
// //             console.log(`Third level: ${k}`);
// //         }
// //     }

// // }

// // for (let i = 5; i <=10; i++) {
// //     console.log(i);
// // }


// /* for (let i=1; i > 0; i++) {
//     let n = i * 2;
//     console.log(n);
//     if (n === 10) {
//         break;
//     }
// }
//  */

// // for (let i =2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// // let i = 2;

// // while (i <=16) {
// //     if (i % 2 === 0) {
// //         i++;
// //     } else {
// //         console.log(i);
// //         i++;
// //     }

// // }


// // const arrayOfNumbers = [];

// // for (let i = 0; i >= 0; i++) {
// //     let j = 5;
// //     arrayOfNumbers[i] = j + i;
// //     if (j + i === 10) {
// //         break;
// //     }
// // }

// // document.write(arrayOfNumbers);

// // for (let i = 20; i >= 10; i--) {
// //     console.log(i);
// //     if (i === 14) {
// //         break;
// //     }
// // }

// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];

// // for (let i = 0; i < arr.length; i++) {
// //     result[i] = arr[i];
// // }
// // console.log(result);


// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // console.log(typeof (data[2]));

// // // Пишем решение вот тут
// // for (let i = 0; i < data.length; i++) {
// //     if (typeof (data[i]) === "string") {
// //         data[i] = `${data[i]} - done`;
// //     } else {
// //         data[i] = data[i] * 2;
// //     }
// // }

// // console.log(data);



// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];
// // // Пишем решение вот тут

// // for (let i = data.length - 1; i >= 0; i--) {
// //     result[data.length - i - 1] = data[i];
// // }
// // console.log(result);

// //-----*     
// //----***
// //---*****
// //--*******
// //-*********
// //***********

// //--------------------------- resolution

// // const lines = 5;
// // let result = '';
// // let res = '';
// // let f = '';
// // const n = 11;
// // let z = 0;
// // first: for (let i = 1; i <= n; i++) {
// //     if (i % 2 === 0) continue first;
// //     for (let j = 1; j <= i; j++) {
// //         f += '*';
// //     }
// //     for (let k = lines - z; k > 0; k--) {
// //         // console.log(lines - z);
// //         for (let l = 1; l <= k; l++) {
// //             res += ' ';
// //         }
// //         break;
// //     }
// //     result += res + f + '\n';
// //     if (res === '') {
// //         break;
// //     } else {
// //         res = '';
// //     }
// //     f = '';
// //     z++;
// // }
// // console.log(result);


// // const lines = 5;
// // let result = '';

// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";
// // }

// // console.log(result);
// // >>>>>>> dev

// //  const num = 101;

// //  if (num < 49) {
// //     console.log('error');
// //  } else if (num > 100) {
// //      console.log('too much');
// //  } else {
// //      console.log('ok');
// //  }

// //------- тернарный оператор -------
// // const t = 50;

// // (t == 50) ? console.log('ok') : console.log('error');


// //------- switch -------
// // const num=51;

// // switch (num) { // строгое стравнение
// //     case 49:
// //         console.log('no');
// //         break;
// //     case 50:
// //         console.log('ok');
// //         break;
// //     default:
// //         console.log('nope');
// //         break;
// // } 


// // const a = 1,
// //       b = 2;


// // console.log ((a && b)); //  => return 0 if one of arg is 0; return the 2nd argument 


// // let jR, mR, fR, sR = 'done';

// // console.log(jR && mR && fR && sR);

// // console.log(!1)


// //------- Что выведет в консоль код? -------

// // console.log( NaN || 2 || undefined );

// // console.log( NaN && 2 && undefined );

// // console.log( 1 && 2 && 3 );

// // console.log( !1 && 2 || !3 );

// // console.log( 25 || null && !3 );

// // console.log( NaN || null || !3 || undefined || 5);

// // console.log( NaN || null && !3 && undefined || 5);

// // console.log( 5 === 5 && 3 > 1 || 5);


// // //------- Выполняется ли условие? -------
// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }

// // //--

// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger || cola || fries === 3 || nuggets) {
// //    console.log('Done!')
// // }

// // //--
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }

// // let n = 50;

// // while (n <= 60) {
// //     console.log(n);
// //     ++n;
// // }

// // let n = 50;  

// // do {
// //     console.log(n);
// //     n++;
// // }
// // while (n<60);

// // let n = 50;

// // for (let i =1; i < 8; i++) {
// //     console.log(n);
// //     n++;
// // }

// // let k = '*';

// // for (let i = 1; i <= 6; i++) {
// //     console.log(k);
// //     k = '*' + k;
// //  }


// // let result = '';


// //     result += "*";
// //     result += '\n';
// //     result += "*";
// //     result += '\n';
// //     result += "*";

// //  console.log(result);

// // first: for (let i =0; i < 3; i++) {
// //     console.log(`First level: ${i}`);
// //     for (let j =0; j < 3; j++) {
// //         console.log(`Second level: ${j}`);
// //         for (let k =0; k < 3; k++) {
// //             if (k===2) /* continue */ break first;
// //             console.log(`Third level: ${k}`);
// //         }
// //     }

// // }

// // for (let i = 5; i <=10; i++) {
// //     console.log(i);
// // }


// /* for (let i=1; i > 0; i++) {
//     let n = i * 2;
//     console.log(n);
//     if (n === 10) {
//         break;
//     }
// }
//  */

// // for (let i =2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// // let i = 2;

// // while (i <=16) {
// //     if (i % 2 === 0) {
// //         i++;
// //     } else {
// //         console.log(i);
// //         i++;
// //     }

// // }


// // const arrayOfNumbers = [];

// // for (let i = 0; i >= 0; i++) {
// //     let j = 5;
// //     arrayOfNumbers[i] = j + i;
// //     if (j + i === 10) {
// //         break;
// //     }
// // }

// // document.write(arrayOfNumbers);

// // for (let i = 20; i >= 10; i--) {
// //     console.log(i);
// //     if (i === 14) {
// //         break;
// //     }
// // }

// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];

// // for (let i = 0; i < arr.length; i++) {
// //     result[i] = arr[i];
// // }
// // console.log(result);


// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // console.log(typeof (data[2]));

// // // Пишем решение вот тут
// // for (let i = 0; i < data.length; i++) {
// //     if (typeof (data[i]) === "string") {
// //         data[i] = `${data[i]} - done`;
// //     } else {
// //         data[i] = data[i] * 2;
// //     }
// // }

// // console.log(data);



// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];
// // // Пишем решение вот тут

// // for (let i = data.length - 1; i >= 0; i--) {
// //     result[data.length - i - 1] = data[i];
// // }
// // console.log(result);

// //-----*     
// //----***
// //---*****
// //--*******
// //-*********
// //***********

// //--------------------------- resolution

// // const lines = 5;
// // let result = '';
// // let res = '';
// // let f = '';
// // const n = 11;
// // let z = 0;
// // first: for (let i = 1; i <= n; i++) {
// //     if (i % 2 === 0) continue first;
// //     for (let j = 1; j <= i; j++) {
// //         f += '*';
// //     }
// //     for (let k = lines - z; k > 0; k--) {
// //         // console.log(lines - z);
// //         for (let l = 1; l <= k; l++) {
// //             res += ' ';
// //         }
// //         break;
// //     }
// //     result += res + f + '\n';
// //     if (res === '') {
// //         break;
// //     } else {
// //         res = '';
// //     }
// //     f = '';
// //     z++;
// // }
// // console.log(result);


// // const lines = 5;
// // let result = '';

// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";
// // }

// // console.log(result);



// // ------- Functions ---------


// // let b;

// // function showMyFirstFunction(a) {
// //     console.log(a);

// // }
// // b = 111;
// // showMyFirstFunction(b);


// // const calc1 = (a, b) => a+b;
// // const calc2 = (a, b) => { return(a + b)};

// // calc(1, 2); 
// // console.log(c);

// // const usdExRe = 28;
// // const discount = 0.9;

// // function convert(amount, exRe) {
// //     return exRe * amount;

// // }

// // function prom(result) {
// //     console.log(result * discount);
// // }

// // prom(convert(500, usdExRe));

// // console.log(prom);

// // function test () {
// //     for (let i = 0; i < 3; i++) {
// //         console.log(i);

// //         if  (i === 3) {
// //             return i;
// //         }
// //     }
// //     console.log('Done');
// //     return 1;
// // }


// // console.log(test());




// // function returnNeighboringNumbers() {
// //     const arr = [];
// //     a = a - 1;
// //     for (let i =0; i<3; i++) {
// //     arr[i] = a+i;

// //     }
// //     return arr;

// // }

// // let a = 5;
// // console.log(returnNeighboringNumbers());



// // function getMathResult(b, c) {
// //     if (typeof(c) === 'string' || c <= 0) {
// //         return b;
// //     } else {
// //     let res2 = '';
// //     for (let i = 1; i <= c; i++) {
// //         let result = 0;
// //         for (let j = 1; j <= i; j++) {
// //             result = b *j;
// //         }
// //         if(i === c /* || typeof(c) != 'string' */) {
// //             res2 += result;
// //             continue;
// //         } else {
// //         res2 += result + '---';
// //         }
// //     }

// //     return res2;
// //     }
// // }

// // // getMathResult(10, 5);

// // console.log(getMathResult(10, 5));



// // function getMathResult(num, times) {

// // }

// // getMathResult(10, 5);

// // const str = 'test';

// // // console.log(str[2].toUpperCase());

// // console.log(str.indexOf('st'));


// // const logg = 'нуы ершы isеее';

// // console.log(logg.slice(9, 11)); 

// // console.log(log)

// // const num = 8.4;

// // console.log(Math.round(num));


// // const num = '8.4xpx';

// // console.log(parseInt(num));


// // const num = '8.4xpx';

// // console.log(parseFloat(num));





// // function calculateVolumeAndArea(a) {
// //     v = a * a * a;
// //     s = 6 * a * a;
// //     if (Number.isInteger(a) && a >= 0) {
// //         return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
// //     } else {
// //         return 'При вычислении произошла ошибка';
// //     }
// // }

// // let a, v, s;

// // calculateVolumeAndArea(5);


// // function getCoupeNumber(sit) {
// //     if (!Number.isInteger(sit) || sit < 0) {
// //         console.log('Ошибка. Проверьте правильность введенного номера места');
// //         return 'Ошибка. Проверьте правильность введенного номера места';
// //     } else if (sit === 0 || sit > 36) {
// //         console.log('Таких мест в вагоне не существует');
// //         return 'Таких мест в вагоне не существует';
// //     } else {
// //         console.log(`Nomer kupe: ${Math.round((sit+1) / 4)}`);
// //         return Math.round((sit + 1) / 4);
// //     }
// // }

// // let coupe = '';
// // let sit = '';

// // getCoupeNumber(2.2);



// // function getCoupeNumber(sit) {
// //     if (!Number.isInteger(sit) || sit < 0) {
// //         alert('Ошибка. Проверьте правильность введенного номера места');
// //     } else if (sit === 0 || sit > 36) {
// //         alert('Таких мест в вагоне не существует');
// //     } else {
// //         alert(`Номер купе: ${Math.round((sit+1) / 4)}`);
// //     }
// // }

// // let coupe,
// //     sit = +prompt('Введите номер места:', '');

// // getCoupeNumber(sit);







// // let time, hours, hour, ends, minutes;

// // function getTimeFromMinutes() {

// //     if (time >= 0 && Number.isInteger(time)) {
// //         hours = time / 60;

// //         if (String(hours).indexOf('.') > 0) {
// //             hour = +(String(hours).slice(0, String(hours).indexOf('.')));
// //         } else {
// //             hour = hours;
// //         }
// //         // console.log(String(hours).indexOf('.'));

// //         minutes = Math.round((hours - hour) * 60);

// //         if (hour === 0 || (hour >= 5 /* && hour <= 10 */ )) {
// //             ends = 'часов';
// //         } else if (hour === 1) {
// //             ends = 'час';
// //         } else {
// //             ends = 'часа';
// //         }

// //         console.log(`Это ${hour} ${ends} и ${minutes} минут`);
// //         return `Это ${hour} ${ends} и ${minutes} минут`;
// //     } else {
// //         console.log('Ошибка, проверьте данные');
// //         return 'Ошибка, проверьте данные';
// //     }
// // }

// // time = 1.1;

// // getTimeFromMinutes(time);




// // function findMaxNumber(a) {

// //     for (let i = 0; i <= 3; i++) {
// //         if (!Number.isFinite(a[i])) {
// //             console.log(0);
// //             return 0;
// //         } else {
// //             continue;
// //         }
// //     }
// //     console.log(Math.max.apply(null, a));
// //     return Math.max.apply(null, a);
// // }

// // let a = [0, 5, 6.6, 11];

// // findMaxNumber(a);




// // let a = 1,
// //     b = 5,
// //     c = '6',
// //     d = 11;

// // function findMaxNumber(a, b, c, d) {
// // if(
// //     !Number.isFinite(a) ||
// //     !Number.isFinite(b) ||
// //     !Number.isFinite(c) ||
// //     !Number.isFinite(d)
// // ) {
// //     console.log(0);
// //     return 0;
// // }
// // else {
// //     console.log(Math.max(a, b, c, d));
// //    return Math.max(a, b, c, d);
// // }

// // }


// // findMaxNumber(a, b, c, d);



// // function fib(n) {

// //     result = '0 1';

// //     for (let i = 0; i <= n; i++) {

// //         let a = 2 * i;
// //         let b = a + 1;

// //         let c = +result.slice(a, b);

// //         a = a + 2;
// //         b = a + 3;

// //         let d = +result.slice(a, b);
// //         result = result + ' ' + (c + d);

// //         let j = String(c+d).length;
// //         console.log(j);
// //     }
// //     console.log(result);

// //     // c = +result.slice(10, 11);
// //     // d = +result.slice(12, 13);
// //     // console.log(result); // 2 digits

// //     // c = +result.slice(12, 13);
// //     // d = +result.slice(14, 16);

// //     // c = +result.slice(20, 22);
// //     // d = +result.slice(23, 25);

// //     // c = +result.slice(23, 25);
// //     // d = +result.slice(26, 28);

// //     // c = +result.slice(26, 28);
// //     // d = +result.slice(29, 32);
// // }

// // let n = 10;
// // let result = '';

// // fib(n);

// // function fib(n) {
// //     if (!Number.isInteger(n) || n <= 0) {
// //         // console.log('');
// //         return '';
// //     } else if (n === 1) {
// //         console.log('0');
// //         return '0';
// //     } else {
// //         let a = 0,
// //             b = 1,
// //             result = '0 1';
// //         for (let i = 1; i <= n - 2; i++) {
// //             if (i % 2 === 1) {
// //                 a = a + b;
// //                 result = result + ' ' + a;
// //             } else {
// //                 b = a + b;
// //                 result = result + ' ' + b;
// //             }
// //         }
// //         console.log(result);
// //         return result;
// //     }
// // }

// // let n = 5;

// // fib(n);


// // function fib(num) {
// //     if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// //         return "";
// //     }

// //     let result = '';
// //     let first = 0;
// //     let second = 1;

// //     for (let i = 0; i < num; i++) {
// //         if (i + 1 === num) {
// //             result += `${first}`;
// //             // Без пробела в конце
// //         } else {
// //             result += `${first} `;
// //         }

// //         let third = first + second;
// //         first = second;
// //         second = third;
// //     }
// //     console.log(result);
// //     return result;
// // }

// // fib(3);

// // function learnJS(what, callback) {
// //     console.log(`I learn: ${what}`);
// //     callback();
// // }

// // function newFun () {
// //     console.log('Super!')
// // }

// // learnJS ('js', newFun);

// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     height: 1024,
// //     colors: {
// //         border: 'black',
// //         background: 'red'
// //     },
// //     makeTest: function() {
// //         console.log('Test');
// //     }
// // };

// // options.makeTest();

// // const {border, background} = options.colors;
// // console.log(border);
// // // console.log(Object.keys(options).length);

// // const arr = [1, 2, 3, 6, 8];

// // arr.forEach(function(item, i, a) {
// //     console.log(`${i}: ${item} внутри массива ${a}`);
// // });


// // const str = prompt('', '');
// // const products = str.split(', ');
// // products.sort();
// // console.log(products.join('/ '));


// // const arr = [1, 5, 10, 15, 122];
// // arr.sort(compareNum);
// // console.log(arr);

// // function compareNum(a, b) {
// //     return a - b;
// // }


// // var rabbit = {};

// // rabbit.run = function(n) {

// //     console.log("Пробежал "+n+" метров!");
// // };

// // rabbit.run(5);
// // rabbit.run(7);





// // function LinearSearch(t, A) // t - искомый элемент,
// // { // A - массив, в котором ищем.
// //     var n = A.length,
// //         i = 0;

// //     A[n] = t;

// //     while (A[i] !== t) i++;

// //     if (i < n) console.log(i); // На выходе индекс искомого элемента.
// //     else console.log(-1); // Если искомого элемента нет в массиве, то -1.
// // }

// // const A = [1, 5, 6, 8, 17, 18, 20, 25, 30, 35, 40, 44];
// // let t = 5;

// // LinearSearch(t, A);


// // function BinarySearch(t, A) // t - искомый элемент,
// // { // A - упорядоченный массив, в котором ищем.
// //     var i = 0,
// //         j = A.length - 1,
// //         k;

// //     while (i <= j) {
// //         k = Math.floor((i + j) / 2);
// //         if (t === A[k]) {
// //             console.log(k);
// //             return k;
// //         }

// //         else if (t < A[k]) j = k - 1;
// //         else i = k + 1;
// //     }
// //     // На выходе индекс искомого элемента.
// //     console.log(-1); 
// //     return -1; // Если искомого элемента нет в массиве, то -1.
// // }

// // const A = [1, 5, 6, 8, 17, 18, 20, 25, 30, 35, 40, 44];
// // let t = 5;

// // BinarySearch(t, A);

// // const obj = {
// //     a: 5,
// //     b:1
// // };

// // const copy = obj;

// // obj.a = 10;

// // console.log(obj);
// // console.log(copy);


// // function copy(mainObj) {
// //     let objCopy = {};

// //     for (let key in mainObj) {
// //         objCopy[key] = mainObj[key];
// //     }

// //     return objCopy;
// // }

// // const numbers = {
// //     a: 2,
// //     b: 5,
// //     c: {
// //         x: 7,
// //         y:4
// //     }
// // };

// // const add = {
// //     d: 17,
// //     e: 20
// // };


// // console.log(Object.assign({}, add));

// // const oldArr = ['a', 'b', 'c'];
// // const newArr = oldArr.slice();

// // console.log(oldArr);
// // oldArr[0] = 'zz';
// // newArr[1] = 'kk';
// // console.log(newArr);
// // console.log(oldArr);


// // const video = ['youtube', 'video', 'rutube'],
// //     blogs = ['wordpress', 'livejournal', 'blogger'],
// //     internet = [...video, ...blogs, 'vk', 'fb'];

// //     console.log(internet);

// // function log(a, b, c) {
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// // }

// // const num = [2, 5, 7];

// // log(...num);

// // const array = ['a', 'b'];

// // const newArray = [...array];

// // console.log(newArray);


// // const q = {
// //         one: 1,
// //         two: 2
// // };

// // const newObj = {...q};

// // console.log(newObj);

// // const personalPlanPeter = {
// //     name: "Peter",
// //     age: "30",
// //     skills: {
// //         languages: ['ru', 'ua', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%',
// //             ruby: '30%'
// //         },
// //         exp: '1 month'
// //     },
// //     showAgeAndLangs: function(plan) {
// //         const {age} = plan;
// //         const {languages} = plan.skills;
// //         let str = `Мне ${age} и я владею языками: `;

// //         languages.forEach(function(lang) {
// //             str += `${lang.toUpperCase()} `;
// //         });
// //         console.log(str);
// //         return str;
// //     }
// // };

// // function showExperience(plan) {
// //     const {
// //         exp: myExp
// //     } = plan.skills;
// //     // console.log(myExp);
// //     return myExp;
// // }

// // const plan = personalPlanPeter;

// // showExperience(plan);

// // function showProgrammingLangs(plan) {
// //     const lang = plan.skills.programmingLangs;
// //     let result = '';

// //     for (let key in lang) {
// //         result += `Язык ${key} изучен на ${lang[key]}` + '\n';
// //     }
// //     // console.log(result.slice(0, result.length - 1));
// //     // return result.slice(0, result.length - 1);
// //     return result;
// // }

// // personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// // const family = ['Peter', 'Anna', 'Alex', 'Linda'];

// // function showFamily(arr) {
// //     let result = '';
// //     if (arr.length === 0) {
// //         console.log('Семья пуста');
// //         return 'Семья пуста';
// //     } else {
// //         for (let i = 0; i < arr.length; i++) {
// //             result += arr[i] + ' ';
// //         }
// //         console.log(`Семья состоит из: ${result}`);
// //         return `Семья состоит из: ${result}`;
// //     }
// // }

// // showFamily(family);

// // const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// // function standardizeStrings(arr) {
// //     arr.forEach(function (item) {
// //         console.log(item.toLowerCase());
// //         return item.toLowerCase();
// //     });
// // }

// // standardizeStrings(favoriteCities);

// // const someString = 'This is some strange string';

// // function reverse(str) {
// //     if (typeof (str) === 'string') {
// //         let arr = [];
// //         for (let i = 0; i < str.length; i++) {
// //             arr[i] = str.slice(i, i + 1);
// //         }

// //         let result = '';
// //         let rev = arr.reverse();

// //         rev.forEach(function (a) {
// //             result += a;
// //         });
// //         console.log(result);
// //         return result;
// //     } else {
// //         console.log('Ошибка!');
// //         return 'Ошибка!';
// //     }
// // }

// // reverse(someString);


// // const baseCurrencies = ['USD', 'EUR'];
// // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// // function availableCurr(arr, missingCurr) {
// //     arr();
// //     let result = 'Доступные валюты:';
// //     if (b[0] === undefined) {
// //         console.log('Нет доступных валют');
// //         return 'Нет доступных валют';
// //     } else {
// //         b.forEach(function (a) {
// //             (a != missingCurr) ? (result += '\n' + a) : ('');
// //         });
// //         console.log(result);
// //         return result;
// //     }
// // }

// // let b = [];

// // function arr() {
// //     b = baseCurrencies.concat(additionalCurrencies);
// // }

// // availableCurr(arr, 'CNY');


// // const baseCurrencies = [ 'USD', 'EUR' ];
// // const additionalCurrencies = [ 'UAH', 'RUB', 'CNY' ];

// // function availableCurr(arr, missingCurr) {
// //     let result = 'Доступные валюты:';
// //     arr = baseCurrencies.concat(additionalCurrencies);

// //     if (arr[0] === undefined) {
// //         console.log('Нет доступных валют');
// //         return 'Нет доступных валют';
// //     } else {
// //         arr.forEach(function (a) {
// //             (a != missingCurr) ? (result += '\n' + a) : ('');
// //         });
// //         console.log(result + '\n');
// //         return result + '\n';
// //     }
// // }

// // let arr = [];

// // availableCurr(arr, 'CNY');

// // let str = 'some';
// // let strObj =  new String(str);

// // // console.log(typeof(str));
// // // console.log(typeof(strObj));

// // console.dir([1, 2, 3]);

// // const soldier = {
// //     health: 400,
// //     armor: 100,
// //     sayHello: function() {
// //         console.log('Hello');
// //     }
// // };  

// // let john = {};

// //  Object.setPrototypeOf(john, soldier);

// //  john.sayHello();
// //  console.log(john);




// // const shoppingMallData = {
// //     shops: [{
// //             width: 10,
// //             length: 5
// //         },
// //         {
// //             width: 15,
// //             length: 7
// //         },
// //         {
// //             width: 20,
// //             length: 5
// //         },
// //         {
// //             width: 8,
// //             length: 10
// //         }
// //     ],
// //     height: 5,
// //     moneyPer1m3: 30,
// //     budget: 50000
// // };

// // function isBudgetEnough(data) {
// //     let space = '';
// //     data.shops.forEach(function (a, b, c) {
// //         let {
// //             width,
// //             length
// //         } = a;
// //         space = +space + (width * length);
// //     });
// //     let cost = space * data.height * data.moneyPer1m3;
// //     console.log(cost);

// //     if (cost <= data.budget) {
// //         console.log('Бюджета достаточно');
// //         return 'Бюджета достаточно';
// //     } else {
// //         console.log('Бюджета недостаточно');
// //         return 'Бюджета недостаточно';
// //     }
// // }

// // isBudgetEnough(shoppingMallData);


// // const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Teks'];

// // function sortStudentsByGroups(arr) {

// //     let a = [], b = [], c = [], rest = [];

// //     arr.sort();
// //     for (let i = 0; i < arr.length; i++) {
// //         if (i < 3) {
// //             a.push(arr[i]);
// //         } else if (i < 6) {
// //             b.push(arr[i]);
// //         } else if (i < 9) {
// //             c.push(arr[i]);
// //         } else {
// //             rest.push(arr[i]);
// //         }
// //     }
// //     console.log([a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);
// // }

// // sortStudentsByGroups(students);

// // const arr = [1, 14, 4, 30, 54];
// // const sorted = arr.sort(compareNum);

// // function compareNum(a, b) {
// //     return a - b;
// // }

// // console.log(sorted);


// // console.log(typeof(+'5'));


// //     console.log(Boolean('4'));
// // let number = 5; debugger

// // function logNumber() {
// //     let number = 4; debugger
// //     console.log(number);
// // } 

// // number = 6;

// // logNumber();


// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };

//     return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


// function foo(a,b) {
//     const [aaa] = a;
//     const {eng} = b;

//     return `${aaa} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

// console.log(result);

// let a = 3;
// function addTwo(x) {
// let ret = x + 2;
// return ret;
// }
// let b = addTwo(a);
// console.log(b);


// 1: let val = 7
//  2: function createAdder() {
//  3:   function addNumbers(a, b) {
//  4:     let ret = a + b
//  5:     return ret
//  6:   }
//  7:   return addNumbers
//  8: }
//  9: let adder = createAdder()
// 10: let sum = adder(val, 8)
// 11: console.log('example of function returning a function: ', sum)

// let val = 7;
// function createAdder() {
// function addNumbers(a, b) {
//    let ret = a + b;
//    return ret;
//    }
//    return addNumbers;
//  }
//  let adder = createAdder();
//  let sum = adder(val, 8);
//  console.log('example of function returning a function: ', sum);


//  1: function createCounter() {
//     2:   let counter = 0
//     3:   const myFunction = function() {
//     4:     counter = counter + 1
//     5:     return counter
//     6:   }
//     7:   return myFunction
//     8: }
//     9: const increment = createCounter()
//    10: const c1 = increment()
//    11: const c2 = increment()
//    12: const c3 = increment()
//    13: console.log('example increment', c1, c2, c3)

// console.log('1'[0]);

// console.log('яблоко' > 'ежик');

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '1$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function transferWaitors(data) {
//     let copy = Object.assign({}, data);
//     copy.waitors = data.waitors.slice();



// let copy = {};

// for (let key in data) {
//     copy[key] = data[key];
// }

// for (let key in data.waitors) {
//     copy.waitors[key] = data.waitors[key];
// }


//     copy.waitors[0] = {name: 'Mike', age: 32};
//     console.log(copy);
//     return copy;
// }

// transferWaitors(restorantData);

// const box = document.getElementById('box');

// console.log(box);


// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// //или

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);


// const circles = document.getElementsByClassName('circle');

// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });


//  const oneHeart = document.querySelector('div');

//  console.log(oneHeart);


// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrp = document.querySelector('.wrapper');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// btns[2].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// box.style.cssText = 'background-color: blue; width: 500 px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');

// div.classList.add('black');

// wrp.prepend(div);


// hearts[0].before(div);

// circles[0].remove();
// div.textContent = 'Hi';


// div.innerHTML = '<h6>hello</h6>';

// div.insertAdjacentHTML('afterbegin', '<h2>Hello!!!</h2>');


// 'use strict';

// console.log(document.getElementById('current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//     result *=x; //result = x * result
//     }
//     console.log(result);
//     return result;

// }


// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return (x * pow(x, n - 1));
//     }
// }
// pow(2, 4);

// let students = {
//     js: [{
//         name: 'john',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));


// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];
//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1]; 
//         }
//         return total;
//     }

// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);



// function factorial(n) {
//     if (Number.isInteger(n) && n >= 2) {
//             return n * factorial(n - 1);
//         } else if (Number.isInteger(n) && n < 2) {
//         return 1;
//     } else {
//         return 'kakashka';
//     }
// }

// console.log(factorial(4));





// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '') {
                if (a.length > 21) {
                    a = a.substr(0, 21).toUpperCase() + '...';
                } else {
                    a = a.toUpperCase();
                }
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
        console.log(personalMovieDB.movies);
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


const btn = document.querySelector('.button'),
    resBtn = document.querySelector('.resButton');

btn.style.background = '#D9F2B4';
resBtn.style.background = 'pink';

const list = document.querySelector('.list'),
    inputMovie = document.querySelector('input'),
    chbx = document.querySelector('#like'),
    fav = [];

btn.onclick = function () {
    let i = Object.values(personalMovieDB.movies).length;


    if (inputMovie.value) {
        personalMovieDB.movies[i + 1] = inputMovie.value;

        const obj = personalMovieDB.movies;


        const obj2 = {};

        let h = Object.values(obj).length;
        let p = Object.values(obj).length;


        for (let a = 0; a < h; a++) {
            obj2[a] = Object.entries(obj)[a][1];

        }

        // console.log('obj', obj);

        // console.log('obj2', obj2);

        Object.assign(obj, obj2);
        // console.log('obj + obj2', obj);

        // console.log(`length: ${h}`);
        h = Object.values(obj).length - 1;
        // console.log(`length-1: ${h}`);

        for (h; h >= p; h--) {
            // console.log('to delete:', obj[Object.entries(obj)[h][0]]);
            delete obj[Object.entries(obj)[h][0]];
        }
        // console.log('final obj:', obj);

        let result = '',
            arrMovies = [];

        for (let j = 0; j < Object.values(personalMovieDB.movies).length; j++) {
            arrMovies[j] = personalMovieDB.movies[j].toUpperCase();
            if (chbx.checked) {
                fav[0] = inputMovie.value.toUpperCase();
                console.clear();
                console.log(`You last favourite movie was: ${fav[0]}`);
            }


        }
        arrMovies.sort();
        // console.log(arrMovies);
        for (let key in obj) {
            obj[key] = arrMovies[key];
        }

        // console.log(obj);

        let f = '';
        arrMovies.forEach(function (item, i) {
            if (item.length > 21) {

                if (arrMovies[i] === fav[0]) {
                    result += `<div class='res'>${[i + 1]}. ${[item.substr(0, 21)]}... - favourite 
                    <div class = 'del'> </div></div>`;
                    f = `${[i + 1]}. ${[item.substr(0, 21)]}... - favourite`;
                } else {
                    result += `<div class='res'>${[i + 1]}. ${[item.substr(0, 21)]}... <div class = 
                    'del'> </div></div>`;
                }

            } else {
                if (arrMovies[i] === fav[0]) {
                    result += `<div class='res'>${[i + 1]}. ${[item]} - favourite<div class = 'del'> </div></div>`;
                    f = `${[i + 1]}. ${[item]} - favourite`;
                } else {
                    result += `<div class='res'>${[i + 1]}. ${[item]} <div class = 'del'> </div></div>`;
                }
            }
        });

        list.innerHTML = `<h4>Your list of movies:</h4><h5>${result}</h5>`;
        const del = document.querySelectorAll('.del');

        del.forEach(del => {
            del.addEventListener('click', (event) => {
                let n = event.target.parentNode.innerText;
                event.target.parentNode.remove();

                for (let z = 0; z < Object.values(personalMovieDB.movies).length; z++) {
                    let k = ((z + 1) + '. ' + personalMovieDB.movies[z] + ' ');

                    if (k === n || n === (k + '- favourite')) {

                        delete personalMovieDB.movies[z];
                    }
                }


            });
        });

        inputMovie.value = '';
        chbx.checked = false;
    } else {
        alert('Please type a movie name first');
    }
};

resBtn.onclick = function () {
    location.reload();
};