function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'json/full.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

loadJSON(function(response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
});

let card_date=[
  {
    "ID": 359380,
    "name": "5 правил ✅ Как подбирать ногти для ленты?",
    "date_create": "25.12.2020 14:08:50",
    "picture": "https://emi-shop.ru/upload/iblock/053/EMi_Official_world-INSTA441.jpg",
    "desc": "Планируем ленту в Instagram. Топ 5 Советов от Екатерины Мирошниченко."
  },
  {
    "ID": 359382,
    "name": "5 быстрых приложений для монтажа видео и красивых сторис",
    "date_create": "25.12.2020 14:11:09",
    "picture": "https://emi-shop.ru/upload/iblock/190/SA0A2812_FW2020_21-_1_.jpg",
    "desc": "Лучшие приложения для монтажа видео"
  },
  {
    "ID": 359379,
    "name": "Новинка! Fiber Base Gel",
    "date_create": "25.12.2020 14:08:50",
    "picture": "https://emi-shop.ru/upload/iblock/394/7620A9A7_E15F_462D_9D1E_071E7EF73912.jpeg",
    "desc": "Представляем Fiber Base Gel. Fiber Base Gel – это базовая гель-лаковая основа, содержащая армирующие синтетические волокна."
  },
  {
    "ID": 359381,
    "name": "Как красиво сфотографировать ногти?",
    "date_create": "25.12.2020 14:08:50",
    "picture": "https://emi-shop.ru/upload/iblock/4bb/117220727_2410961692534870_6800879935972632742_n.jpg",
    "desc": "Екатерина Мирошниченко делится советами о том, как красиво сфотографировать маникюр."
  },
  {
    "ID": 357759,
    "name": "Дома или в салоне?",
    "date_create": "10.12.2020 16:54:58",
    "picture": "https://emi-shop.ru/upload/iblock/682/stat_home_new.jpg",
    "desc": "Разбираемся, на каком формате работы лучше остановиться."
  },
  {
    "ID": 357756,
    "name": "ПОШАГОВАЯ инструкция дизайна ногтей",
    "date_create": "09.12.2020 14:32:16",
    "picture": "https://emi-shop.ru/upload/iblock/998/107901815_116612913224308_6048904933262758542_n.jpg",
    "desc": "Рассказываем о том, как сделать модный дизайн ногтей"
  },
  {
    "ID": 357752,
    "name": "5 способов совмещения E.MiLac Base Gel",
    "date_create": "09.12.2020 14:32:16",
    "picture": "https://emi-shop.ru/upload/iblock/12d/Base-medium_.jpg",
    "desc": "E.MiLac Base Gel - самая жидкая, экономичная и жесткая растворимая база в линейке E.Mi."
  },
  {
    "ID": 357755,
    "name": "Как использовать Natural Force?",
    "date_create": "09.12.2020 14:32:16",
    "picture": "https://emi-shop.ru/upload/iblock/0d4/Natural-Force.jpg",
    "desc": "Два способа использования Natural Force."
  },
  {
    "ID": 357754,
    "name": "Самые востребованные базовые цвета по мнению Екатерины Мирошниченко",
    "date_create": "09.12.2020 14:32:16",
    "picture": "https://emi-shop.ru/upload/iblock/f33/115674221_311184120259779_8453792106900894966_n-_1_.jpg",
    "desc": "Топ 7 базовых цветов"
  },
  {
    "ID": 357753,
    "name": "Три базы E.MiLac",
    "date_create": "09.12.2020 14:32:16",
    "picture": "https://emi-shop.ru/upload/iblock/af7/Base-gel2-_1_.jpg",
    "desc": "Какую базу выбрать?"
  }
];
function card_body_write(card){
    return
    `<div class="card col-lg-6">
    <img src="${card.picture}" alt="">
    <div class="card-body">
        <div class="card-title">${card.name}</div>
        <div class="card-date">${card.date_create}</div>
        <div class="card-by">By Rickie Baroch</div>
    </div>
    </div>`
};
document.getElementById("card_many").innerHTML=`
${card_date.map(function(card){
  return `<div class="card col-lg-6">
  <img src="${card.picture}">
  <div class="card-body">
        <div class="card-title">${card.name}</div>
        <div class="card-date">${card.date_create}</div>
        <div class="card-by">By Rickie Baroch</div>
    </div>
    </div>`
}).join('')}`;
/*`${card_date.map(card_body_write).join('')}`;*/