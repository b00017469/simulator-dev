export const codeCategories = [
  {
    id: '1',
    title: 'CSS',
    subcategories: [
      {
        id: '1-1',
        title: 'Пример кода CSS',
        code: `body {
  font-family: Arial, Verdana,  sans-serif; /* Семейство шрифтов */
  font-size: 11pt; /* Размер основного шрифта в пунктах  */
  background-color: #f0f0f0; /* Цвет фона веб-страницы */
  color: #333; /* Цвет основного текста */ 
}
h1 {
  color: #a52a2a; /* Цвет заголовка */
  font-size: 24pt; /* Размер шрифта в пунктах */
  font-family: Georgia, Times, serif; /* Семейство шрифтов */
  font-weight: normal; /* Нормальное начертание текста  */
}
p {
  text-align: justify; /* Выравнивание по ширине */
  margin-left: 60px; /* Отступ слева в пикселах */
  margin-right: 10px; /* Отступ справа в пикселах */
  border-left: 1px solid #999; /* Параметры линии слева */
  border-bottom: 1px solid #999; /* Параметры линии снизу */
  padding-left: 10px; /* Отступ от линии слева до текста  */
  padding-bottom: 10px; /* Отступ от линии снизу до текста  */
}`,
        maxUsersSpeed: '150',
      },
      {
        id: '1-2',
        title: 'Разные методы добавления стилей CSS',
        code: `<!DOCTYPE HTML>
<html  lang="eng">
 <head>
  <meta charset="utf-8">
  <title>Подключение стиля</title>
  <style>
  /*@import url("style/header.css"); импорт из файла*/
   H1 { 
    font-size: 120%; 
    font-family: Arial, Helvetica, sans-serif; 
    color: green; 
   }
  </style>
 </head>
 <body>
   <h1 style="font-size: 36px; font-family: Times, serif; color: red">Заголовок 1</h1>
   <h1>Заголовок 2</h1>
 </body>
</html>`,
        maxUsersSpeed: '150',
      },
      {
        id: '1-3',
        title: 'Стили для разных типов носителей',
        code: ` <title>Типы носителей</title>
  <style>
   @media screen { /* Стиль для отображения в браузере */
    BODY {
     font-family: Arial, Verdana, sans-serif; /* Рубленый шрифт */
     font-size: 90%; /* Размер шрифта */
     color: #000080; /* Цвет текста */
    }
    H1 {
     background: #faf0e6; /* Цвет фона */
     border: 2px dashed maroon; /* Рамка вокруг заголовка */
     color: #a0522d; /* Цвет текста */
     padding: 7px; /* Поля вокруг текста */
    }
    H2 {
     color: #556b2f; /* Цвет текста */
     margin: 0; /* Убираем отступы */
    }
    P {
     margin-top: 0.5em; /* Отступ сверху */
    }
   }
   @media print { /* Стиль для печати */
    BODY {
     font-family: Times, 'Times New Roman', serif; /* Шрифт с засечками */
    }
    H1, H2, P {
     color: black; /* Чёрный цвет текста */
    }
   }
  </style>`,
        maxUsersSpeed: '150',
      },
    ],
  },
  {
    id: '2',
    title: 'HTML',
    subcategories: [
      {
        id: '2-1',
        title: 'Базовая структура',
        code: `<!DOCTYPE html>
<html  lang="eng">
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
        maxUsersSpeed: '150',
      },
      {
        id: '2-2',
        title: 'Простой пример HTML',
        code: `<!DOCTYPE html>
<html lang="eng">
<body>

<h2>Use of The class Attribute in JavaScript</h2>
<p>Click the button to hide all elements with class name "city":</p>

<button onclick="myFunction()">Hide elements</button>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>

</body>
</html>`,
        maxUsersSpeed: '150',
      },
    ],
  },
  {
    id: '3',
    title: 'JS',
    subcategories: [
      {
        id: '3-1',
        title: 'Конструкция if else',
        code: `let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}`,
        maxUsersSpeed: '150',
      },
      {
        id: '3-2',
        title: 'Конструкция "switch"',
        code: `switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}`,
        maxUsersSpeed: '150',
      },
      {
        id: '3-3',
        title: 'Цикл "for..in"',
        code: `let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}`,
        maxUsersSpeed: '150',
      },
      {
        id: '3-4',
        title: 'Рекурсия',
        code: `let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};
// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
alert(sumSalaries(company)); // 6700`,
        maxUsersSpeed: '150',
      },
    ],
  },
  {
    id: '4',
    title: 'React',
    subcategories: [
      {
        id: '4-1',
        title: 'Простой пример',
        maxUsersSpeed: '250',
        code: 'const firstCode = "Hello world"',
      },
    ],
  },
];
