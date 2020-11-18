
    
    /**
 * Deklaracja 
 */
var Game      = Game      || {};
var Keyboard  = Keyboard  || {}; 
var Component = Component || {};

/**
 * Przypisywanie klawiszy strzałek do poszczgólnych kierunków
 */
Keyboard.Keymap = {
  37: 'left',         /** *Strzałka w lewo */
  38: 'up',			  /** *Strzałka do góry */
  39: 'right',		  /** *Strzałka w prawo*/
  40: 'down'		  /** *Strzałka w dół */
};

/**
 * Funkcja do interpretowania działań, które maja się wydarzyć po kliknieciu przycisków
 */
Keyboard.ControllerEvents = function() {
  
  // Początkowa deklaracja wartości klawiszy
  var self      = this;
  this.pressKey = null;
  this.keymap   = Keyboard.Keymap;
  
  // Prypisanie wydarzenia do wciśniecia klawisza
  document.onkeydown = function(event) {
    self.pressKey = event.which;
  };
  
  // Pobranie wartości klawisza
  this.getKey = function() {
    return this.keymap[this.pressKey];
  };
};

/**
 * Elementy zawarte danej planszy gry
 */
Component.Stage = function(canvas, conf) {  
  
  // deklaracje elementów na planszy
  this.keyEvent  = new Keyboard.ControllerEvents(); //Przypisanie do zmiennej "keyEvent" funkcji "Keyboard.ControllerEvents"
  this.width     = canvas.width; // Przypisanie do zmiennej "width" szerokości elementu canvas
  this.height    = canvas.height; // Przypisanie do zmiennej "height" wysokości elementu canvas
  this.length    = []; // Przypisanie do zmiennej "length" długości snake, który jest tablicą 
  this.food      = {}; // Przypisanie do zmiennej "food" wartość kulki, którą goni snake
  this.score     = 0; // Przypisanie do zmiennej "score" początkowej wartości punktów gracza
  this.direction = 'down'; // Przypisanie do zmiennej "direction" początkowy kierunek snake
  this.conf      = { // Przypisanie do zmiennej "conf" początkowej konfiguracji widoku snake
    cw   : 10,
    size : 1,
    fps  : 1000
  };
  
  // Zainicjalizowanie ruchu objektem conf za pomocą klawiszy
  if (typeof conf == 'object') {
    for (var key in conf) {
      if (conf.hasOwnProperty(key)) {
        this.conf[key] = conf[key];
      }
    }
  }
  
};

/**
 * Składowe naszego snake
 */
Component.Snake = function(canvas, conf) {
  
  // Deklarowanie planszy jako nową funckje "Component.Snake"
  this.stage = new Component.Stage(canvas, conf);
  
  // Funkcja inicjalizująca Snake
  this.initSnake = function() {
    
    // Pętla służąca do przemieszczania sie snake 
    for (var i = 0; i < this.stage.conf.size; i++) {
      
      // Dodawanie do snake kolejnych komórek, które zwiększają jego długość
      this.stage.length.push({x: i, y:0});
}
};
  
  // Wywołanie funckji w celu "animowania" snake
  this.initSnake();
  
  // Wywołanie funckji w celu wyświetlania food w postaci pojedyńczej kropki 
  this.initFood = function() {

    // Dodawanie food na planszy w losowej pozycji o kordynatach x i y
    this.stage.food = {
x: Math.round(Math.random() * (this.stage.width - this.stage.conf.cw) / this.stage.conf.cw), // randomowa wartość * (szerokość planszy-odległość komórek w conf) /odległość komórek w conf
y: Math.round(Math.random() * (this.stage.height - this.stage.conf.cw) / this.stage.conf.cw), // randomowa wartość * (wysokość planszy-odległość komórek w conf) /odległość komórek w conf
};
};
  
  // Ponowne wywołanie funckji w celu wyświetlania food w postaci pojedyńczej kropki
  this.initFood();
  
  // Restartowanie planszy
  this.restart = function() { // deklaracja funckji restart, która
    this.stage.length            = []; // Ustawia zmodyfikowana wartość "length" do początkowej
    this.stage.food              = {}; // Ustawia na planszy położenie "food"
    this.stage.score             = 0;  // Zeruje punkty
    this.stage.direction         = 'down'; // Ustawia początkowy kiedrunek w dół
    this.stage.keyEvent.pressKey = null;  // Ustawia wartość wciśnięcia klawisza na null, czyli żadne klawisz nie jest wcisniety
    this.initSnake(); // Inicjuje snake
    this.initFood(); // Inicjuje food
  };
};

/**
 * Rysowanie na planszy
 */
Game.Draw = function(context, snake) { //funckja do rysowania 
  
  // Funckja do rysowania po planszy
  this.drawStage = function() {
    
    // Nacisniecie klawisza powoduje zmiane kierunku snake
    var keyPress = snake.stage.keyEvent.getKey(); //Zmienna "keyPress, która ściaga do snake kierunek podany za pomoca klawisza"
    if (typeof(keyPress) != 'undefined') { // Warunek sprawdza, czy został naciśniety poprawy klawisz zadeklarowany wcześniej
      snake.stage.direction = keyPress; // Ustawienie kierunku snake na planszy na obecnie wciśniety klawisz
    }
	
	
    
    // Ustawienie koloru tła poziomu na czarny
context.fillStyle = "black"; // Ustawienie koloru tła na czarny 
context.fillRect(0, 0, snake.stage.width, snake.stage.height); // Wypełnienie całej planszy, co daje nam to, że wyświetla sie snake tylko o danej długości, 
																//a nie wyświetla sie w każdym miejscu gdzie był

    // Do zmiennej nx i ny przypisanie początkowych koordynatów snake
    var nx = snake.stage.length[0].x; //Przypisanie wartości na X jako 0
    var ny = snake.stage.length[0].y; //Przypisanie wartości na Y jako 0

    // Switch, który po wciśnięciu danego klawisza, który zmienia pozycje zmienia wartość początkowa snake
    switch (snake.stage.direction) {
      case 'right':
        nx++;
        break;
      case 'left':
        nx--;
        break;
      case 'up':
        ny--;
        break;
      case 'down':
        ny++;
        break;
    }
    
    // Sprawdzanie kolizji na planszy
    if (this.collision(nx, ny) == true) {
      snake.restart();
      return;
    }
    
    // Zliczanie punktów za zebrane food
    if (nx == snake.stage.food.x && ny == snake.stage.food.y) { // Jeżeli pozycja snake na X i Y jest taka sama dla food
      var tail = {x: nx, y: ny}; // zmienna "tail" przyjmuje wartości X i Y, które są koncem snake
      snake.stage.score++; // Punkty są dodawane 
      snake.initFood(); // Nowy food jest inicjowany
    } else {
      var tail = snake.stage.length.pop(); // zmiennej "tail" pobierane są wartości długości snake
      tail.x   = nx; // Wartość X tail to wartość nx snake, ostatnie znane x snake
      tail.y   = ny; // Wartość Y tail to wartość ny snake, ostatnie znane y snake 
    }
    snake.stage.length.unshift(tail);
    
    // Rysowanie snake
    for (var i = 0; i < snake.stage.length.length; i++) {
      var cell = snake.stage.length[i]; //Dodawanie komórki przy każdym obrocie pętli 
      this.drawCell(cell.x, cell.y); // Przypisanie mu koordynatów X i Y
    }
    
    // Rysowanie food 
    this.drawCell(snake.stage.food.x, snake.stage.food.y); // Pojedyńcza komórka, która przyjmuje wartość koordynatów X i Y
    
    // Wypisywanie wyniku na planszy 
    context.fillText('Punkty Snake: ' + snake.stage.score, 520, (snake.stage.height - 5)); //Wypisanie zebranych punktów, oraz pozycji na jakiej sie wyświetla na planszy 
  };
  
  // Rysowanie pojedyńczej komórki(Snake to kilka takich komórek, food to pojedyńcza komórka)
  this.drawCell = function(x, y) { // Funkcja komórki przyjmująca x i y jako koordynatów komórki
    context.fillStyle = 'rgb(139, 0, 0)'; // kolor komorki
    context.beginPath(); // Ustawienie początkowej ścieżki 
    context.arc((x * snake.stage.conf.cw + 6), (y * snake.stage.conf.cw + 6), 4, 0, 2*Math.PI, false);   //Wygląd pojedyńczej komórki 
    context.fill(); //Wypełnienie komórki
  };
  
  // Kolizje z ścianami borderami
  this.collision = function(nx, ny) { // funkcja na wykrywanie kolizji 
    if (nx == -1 || nx == (snake.stage.width / snake.stage.conf.cw) || ny == -1 || ny == (snake.stage.height / snake.stage.conf.cw)) { // Warunek na wykrycie kolizji
																																	   // (jezjeli koordynaty snake będą ujemne, albo wyjdą poza border(plansze))
      return true;
    }
    return false;    
}
};


/**
 * Zainicjalizowanie funkcji gry
 */
Game.Snake = function(elementId, conf) {
  
  // Sets
  var canvas   = document.getElementById(elementId); //Zadeklarowanie planszy
  var context  = canvas.getContext("2d"); // Zadeklarownie contextu potrzebnego do rysowania i twoerzenia elementów(np. Cell) 
  var snake    = new Component.Snake(canvas, conf); // Zadeklarowanie snake jako elementu, który przyjmuje wartość canvas jako plansz i conf jako jego konfiguracje
  var gameDraw = new Game.Draw(context, snake); // Zadeklarowanie gameDraw do rysowania(np. poruszania sie snake)
  
  // Interwały gry do wyświetlania poszczególnych obrazów, czyli fps
  setInterval(function() {gameDraw.drawStage();}, snake.stage.conf.fps);
};


/**
 * Zadeklarowanie początkowego okienka 
 */
window.onload = function() {
  var snake = new Game.Snake('stage', {fps: 60, size: 2}); // Zadeklarowanie snake, który jest nowa gra na planszy stage z właściwościami 60fpsów i początkowym rozmiarze snake na 2 komórki
};
