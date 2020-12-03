 
 console.log("!!ZAD1!!")
var obiektJSON = {
  "id" : 1,
  "name":["Tomasz","Konkel"],
  "email" : "t.konkel90@gmail.com",
  "ustawienia" : {
    "dzwiek" : "wyłączony",
	"jakosc": "najwyższa",
    "maxDzwieku" : 5,
	"rozdzielczosc" : {
			"min" :"640x480",
			"max" :"1920x1080",
			"odswiezanie" :60
		}
  }
  }


function show(obiektJSON){
	console.log("Wynik działania dodawania to:"+" "+ obiektJSON)
}
show(obiektJSON.ustawienia.maxDzwieku + obiektJSON.ustawienia.rozdzielczosc.odswiezanie)


function showString(a,b){
	var c = `Obecna rozdzielczosc ${a} jest ${b}`
	console.log(c)
}
var a = obiektJSON.ustawienia.rozdzielczosc.max
var b = obiektJSON.ustawienia.dzwiek
showString(a,b)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("!!ZAD2!!")

const pobieranie = fetch('https://jsonplaceholder.typicode.com/posts/7');

pobieranie
function getArticle(response) {
    return new Promise((resolve, reject) => {
        if (response !== 200) {
            resolve(response);
   
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}

getArticle(pobieranie).then(response => response.json().then(function(data) {
		var wynik = data.id+data.userId;
        console.log("Wynik dodawania zad2 to: "+wynik);
      }))
.catch(error => console.log("Błąd ZAD2",error))
.finally(() => console.log('finally zad2'));


const pobieranie_str = fetch('https://jsonplaceholder.typicode.com/posts/7');
pobieranie_str
    function getArticle(response) {
    return new Promise((resolve, reject) => {
        if (response !== 200) {
            resolve(response);
   
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}

getArticle(pobieranie_str)
.then(response => response.json().then(function(data) {
		var Obiekt = [data.id ,data.title];
        console.log("Stworzony obiekt do zad2 :");
		console.log(Obiekt)
		
		
      }))
.catch(error => console.log("Błąd zad2.2:",error))
.finally(() => console.log('finally zad2'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("!!ZAD3!!")
async function setArticleData6(posty) {
    const article = await getArticle(pobieranie);
    console.log("Wynik działania z zad3 to:");
}

setArticleData6(pobieranie);

async function setArticleData7(posty_str) {
    const article = await getArticle(pobieranie_str);
    console.log("Stworzony obiekt z zad3 to:");
}

setArticleData7(pobieranie_str);


 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let url = 'https://jsonplaceholder.typicode.com/posts/7';
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = function () {
            let responseObj = xhr.response;
            let name = responseObj.title;
            let id = responseObj.id;
			let userId = responseObj.userId;
			let tytul = responseObj.title;
			wynik1 = id+userId;
	
	console.log("!!ZAD4!!")
    console.log("Wynik dzialania z zad7: "+" "+wynik1 ) ;
	console.log("Stworzony obiekt z  zad7 to:") ;
	console.log(id+","+tytul ) ; 
        };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pobieranie_fetch = fetch('https://jsonplaceholder.typicode.com/posts/7');

pobieranie_fetch
    .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Zbyt długi czas oczekiwania dla ZAD5 ');
        return;
      }
	  
	  response.json().then(function(data) {
    function showFetch(a){
			console.log("!!ZAD5!!");
			console.log("Wynik działania dodawania dla ZAD5 to:"+" "+ a)
	}
		showFetch(data.id + data.userId)
		
	function obiekt(a,b){
		var obkt = [a,b];
        console.log("Stworzony obiekt dla ZAD5 to:");
		console.log(obkt);
	}	
		obiekt(data.id,data.title)
		
		
      });
	 
    }
  )
   .catch(function(err) {
    console.log('Błąd zadanie5');
  });
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
axios.get('https://jsonplaceholder.typicode.com/todos/7')
  .then((response) => {
    let id = response.data.id;
    let userId = response.data.userId;
	let tytul = response.data.title;
	wynik1 = id+userId;
	
	console.log("!!ZAD6!!")
    console.log("Wynik dzialania zad6: "+" "+wynik1 ) ;
	console.log("Stworzony obiekt z  zad6 to:") ;
	console.log(id+","+tytul ) ;
  })
  .catch(function (error) {
    // handle error
    console.log("Błąd zadania 6 ", error);
  })
.finally(() => console.log('finally zad6'));