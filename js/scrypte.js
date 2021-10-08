
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:  
readTextFile("js/json/news.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
  document.getElementById("card_many").innerHTML=`
${data.map(function(card){
  return `<div class="card-flex ">
  <div class="card-image">
    <img src="${card.picture}">
  </div>
  <div class="card-body">
        <div class="card-title">${card.name}</div>
        <div class="card-date">${card.date_create} By Rickie Baroch</div>
        
    </div>
    </div>`
}).join('')}`;
});

