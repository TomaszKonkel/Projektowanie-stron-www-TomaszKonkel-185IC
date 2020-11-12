$(document).ready(function () {
	// Zadanie do wykonania z JavaScript
    function zad1(zdanie) {
        const result = zdanie.length;
        console.info("Liczba liter: " + result + " gdzie " + result + " to liczba liter tekstu.")
    }
    zad1("TomaszKonkel");

    var tablica = [1,2,3,4,7];

    function zad2(tablica) {
        var suma2=0;
        for (var i = 0; i < tablica.length; i++) {
            suma2 = suma2 + tablica[i];
            console.info(tablica[i]);
        }
        console.info("Suma tablicy to: " + suma2);
    }
    zad2(tablica);

    function zad3(zdanie1) {
        var nowezdanie
        for (var i = 0; i < zdanie1.length; i=i+2) {
            zdanie1 = zdanie1.replace(zdanie1.charAt(i), zdanie1.charAt(i).toUpperCase());
        }
        console.info(zdanie1);
    }
    zad3("Ala ma kota");

    function zad4(a, b) {
        var iloczyn;
        if (typeof a == "number" && typeof b == "number") {
            iloczyn = a * b;
            console.info("iloczyn to: " + iloczyn);
        }
        else
            console.info("false");
    }
    zad4(2, 8)

    function zad5(imie, miesiac) {
        if (miesiac == "Styczen" || miesiac == "styczen" || miesiac == "luty" || miesiac == "Luty" || miesiac == "Grudzien" || miesiac == "grudzien")
            console.info(imie + " jezdzi na sankach");
        else if (miesiac == "Maj" || miesiac == "maj" || miesiac == "marzec" || miesiac == "Marzec" || miesiac == "Kwiecien" || miesiac == "kwiecien")
            console.info(imie + " chodzi po kaluzach");
        else if (miesiac == "Czerwiec" || miesiac == "czerwiec" || miesiac == "lipiec" || miesiac == "Lipiec" || miesiac == "Sierpien" || miesiac == "sierpien")
            console.info(imie + " sie opala");
        else if (miesiac == "Wrzesien" || miesiac == "wrzesien" || miesiac == "Pazdziernik" || miesiac == "pazdziernik" || miesiac == "Listopad" || miesiac == "listopad")
            console.info(imie + " zbiera liscie");
        else
            console.info(imie + " uczy sie JS");
    }
    zad5("Tomasz", "czerwiec");

    function zad6(tekst, znak_rozdzialu) {
        console.info(tekst);
        var tab = tekst.split(znak_rozdzialu);
        var stab = tab.sort();
        var str = stab.join([separator = znak_rozdzialu]);
        console.info(str);
    }
    zad6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|")

    var tabImiona = ["Ania", "Marcin", "Bartek", "Piotr"];

    function zad7_1(tab) {
        var str = tab.join([separator = ","]);
        var strDuze = str.toUpperCase();
        var tabDuzeImiona = strDuze.split(",");
        console.info(tabDuzeImiona);

    }
    function zad7_2(tab) {
        var str = tab.join([separator = ","]);
        for (var i = 3; i < str.length; i = i+3) {
            str = str.replace(str.charAt(i), str.charAt(i).toUpperCase());
        }
        var tabRozneWielkosci = str.split(",");
        console.info(tabRozneWielkosci);
    }
    zad7_1(tabImiona);
    zad7_2(tabImiona);

    function checkFemale(imie) {
        var a = imie.length - 1;
        var b = false;
        if (imie.charAt(a) === "a") {
            console.info("checkFemale(" + imie + ")" + " === true");
            b = true;
        }
        else {
            console.info("checkFemale(" + imie + ")" + " === false");
            b = false;
        }
        return b;
    }
    checkFemale("Tomasz")

    const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Beatczak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Betata Lecka",
        "Katarzyna Melecka"
    ]

    function countWomanInTable(tab) {
        var a = 0,b = 0;
        for (var i = 0; i < users.length; i++) {
            a = users[i].indexOf(" ");
            if (checkFemale(users[i].slice(0, a)) == true)
                b++;
        }
        console.info("Ilosc kobiet: "+b);
    }
    countWomanInTable(users);


	
	//Obsługa zdarzeń addEventListener
	const przycisk1 = document.getElementById('przycisk1');
    przycisk1.addEventListener('click', () => {
        console.log('Kliknieto mnie ');
    });
	
	const przycisk2 = document.getElementById('przycisk2');
    przycisk2.addEventListener('dblclick', () => {
        console.log('Kliknieto mnie podwójnym kliknieciem ');
    });
	
	const przycisk3 = document.getElementById('przycisk3');
    przycisk3.addEventListener('mouseenter', () => {
        console.log('Najechałeś na mnie ');
    });
	
	const input = document.getElementById('input');
    input.addEventListener('input', () => {
        console.log('Wpisałeś tekst ');
    });
	
	const wklej = document.getElementById('wklej');
    wklej.addEventListener('paste', () => {
        console.log('Wkleiłeś tekst '+'"'+kopiuj.value+'"');
    });
	
	const kopiuj = document.getElementById('kopiuj');
    kopiuj.addEventListener('copy', () => {
        console.log('Skopiowałeś wpisany tekst  '+'"'+kopiuj.value+'"');
    });
	
	document.getElementById('przycisk4').onclick = displayDate;
	
		function displayDate() {
			console.log(Date());
		}

    
	const szukanie = document.getElementById('szukanie');
    szukanie.addEventListener('search', () => {
        console.log('Wyszukałeś tekst o wartości '+'"'+szukanie.value+'"');
    });
	
	const lista = document.getElementById('lista');
    lista.addEventListener('change', () => {
        console.log('Wybrałeś '+'"'+lista.value+'"');
    });
	
	const rozwijanie = document.getElementById('rozwijanie');
    rozwijanie.addEventListener('toggle', () => {
        console.log('Rozwinąłeś liste ');
    });
});
